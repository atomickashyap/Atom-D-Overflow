import { combineReducers } from "redux";
import authReducer from './auth';
import currentUserReducer from './currentUser'
import questionReducer from './question'

export default combineReducers({
    authReducer, currentUserReducer, questionReducer
})

