export const actionTypes = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE',
  ADD_USER_REQUEST: 'ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'ADD_USER_FAILURE',
}

export const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST,
})

export const addUserRequest = (user) => ({
  type: actionTypes.ADD_USER_REQUEST,
  payload: user,
})
