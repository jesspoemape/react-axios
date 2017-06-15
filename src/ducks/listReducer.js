import apiURL from '../api';

const initialState = {
  loading: false,
  customerList: []
}

// Action Types
const GET_LIST = 'GET_LIST';
const GET_LIST_PENDING = 'GET_LIST_PENDING';
const GET_LIST_FULFILLED = 'GET_LIST_FULFILLED';

// Reducer
export default function listReducer( state = initialState, action ) {
  switch( action.type ) {
    // Pending
    case GET_LIST_PENDING:
      return {
        loading: true,
        customerList: []
      }

    // Fulfilled
    case GET_LIST_FULFILLED:
      return {
        loading: false,
        customerList: action.payload
      }

    default: return state;
  }
}

// Action Creators
export function getList(promise) {
  return {
    type: GET_LIST,
    payload: promise
  }
}

