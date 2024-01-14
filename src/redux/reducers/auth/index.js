import * as types from "../../types";

// **  Initial State
const initialState = {}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return {
        ...action.data,
      }

    case types.LOGIN:
      return {
        ...action.data,
      }

    case types.LOGOUT:
      return {}

    default:
      return state;
  }
}

export default authReducer;
