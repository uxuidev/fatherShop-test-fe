import { call, put, takeEvery } from 'redux-saga/effects'
import { actionTypes } from './actions'
import axios from 'axios'

function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'http://localhost:8000/api/users')
    console.log(response.data)
    yield put({ type: actionTypes.FETCH_USERS_SUCCESS, payload: response.data })
  } catch (error) {
    console.log('API call failed', error)
    yield put({ type: actionTypes.FETCH_USERS_FAILURE, payload: error.message })
  }
}

function* addUser(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:8000/api/users', action.payload)
    yield put({ type: actionTypes.ADD_USER_SUCCESS, payload: response.data })
  } catch (error) {
    yield put({ type: actionTypes.ADD_USER_FAILURE, payload: error.message })
  }
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_USERS_REQUEST, fetchUsers)
  yield takeEvery(actionTypes.ADD_USER_REQUEST, addUser)
}
