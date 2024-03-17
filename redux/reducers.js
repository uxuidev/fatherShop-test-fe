import { actionTypes } from './actions'

const initialState = {
  users: [],
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      }
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case actionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
