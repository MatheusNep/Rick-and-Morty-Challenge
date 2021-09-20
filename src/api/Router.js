import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {client, ExchangeQueryCharacters, ExchangeQueryLocations } from './ApiRequests'
import {
    ApolloProvider
  } from "@apollo/client";
import CreateEpisode from '../Components/CreateEpisode';
import Episodes from '../Components/Episodes';


function AllRouter(){
    
    return (    
        <ApolloProvider client={client}>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/characterList" />
                </Route>
                <Route path="/characterList" exact >        
                    <ExchangeQueryCharacters/>
                </Route>
                <Route path="/locationList" exact>
                    <ExchangeQueryLocations/>
                </Route>
                <Route path="/createEpisode" exact>
                    <CreateEpisode/>
                </Route>
                <Route path="/episodes" exact>
                    <Episodes/>
                </Route>
            </Switch>
        </ApolloProvider> 
        
    )
}


export default AllRouter