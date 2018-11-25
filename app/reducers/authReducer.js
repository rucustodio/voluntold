import {LOG_IN, LOG_OUT} from '../actions/authActions';


const initialState = {
  user: null,
  loggedIn: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN: {
      console.log(action.payload.user._auth._app)
      return {
        ...state,
        user: action.payload.user._user,
        firebaseApp: action.payload.user._auth._app,
        loggedIn: true,
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        user: null,
        loggedIn: false,
      }
    }
    default:
      return state
  }
}