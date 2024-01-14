// ** ThemeConfig Import
import * as types from "../../types";

// ** Initial State
const initialState = {
  isRTL: false
}

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_RTL:
      return { ...state, isRTL: action.value }

    default:
      return state
  }
}

export default layoutReducer;
