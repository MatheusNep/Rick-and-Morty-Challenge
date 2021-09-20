import {createStore, applyMiddleware} from 'redux';

import ReduxPromise from 'redux-promise'

import EpisodeReducer from './Components/CreateEpisodeReducer'



const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : undefined

const store = createStore(EpisodeReducer,persistedState, applyMiddleware(ReduxPromise));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})
export default store;