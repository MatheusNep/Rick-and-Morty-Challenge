const initialState = {
    episodes: [],
}

const add = "episodesAdd"

export default function EpisodeReducer(state = initialState, action) {
    const {type, payload} = action;
  switch (type) {
    case add: {
        state.episodes.push(payload)
        console.log(state)
        return state
    }
    default:
      return state
  }
}

export function createEpisode(episode){
    const payload = episode
    return {type: add, payload: payload}
}