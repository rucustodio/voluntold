import {GET_EVENTS} from '../actions/eventsActions';


const initialState = {
  events: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_EVENTS: {
      console.log(action);
      return {
        ...state,
        events: action.payload
      }
    }
    default:
      return state
  }
}