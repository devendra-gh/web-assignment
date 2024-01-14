// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import layout from './layout'

// ** combine Reducers
const rootReducer = combineReducers({
  auth,
  layout
})

export default rootReducer;
