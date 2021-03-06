import apiURL from '../api';

const initialState = {
  loading: false,
  customer: {},
  initialLoad: true,
  creating: false
};

// Action Types
const SHOW_CREATE_CUSTOMER = 'SHOW_CREATE_CUSTOMER';
const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
const GET_CUSTOMER = 'GET_CUSTOMER';
const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

// Reducer
export default function workspaceReducer( state = initialState, action ) {
  switch( action.type ) {
    // Show Create Customer
    case SHOW_CREATE_CUSTOMER:
      return Object.assign({}, state, {
        creating: true
      });
    // Create Customer - Fulfilled
    case CREATE_CUSTOMER + "_FULFILLED":
      return {
        loading: false,
        initialLoad: true,
        creating: false,
        customer: {}
      }
    // Get Customer - Pending
    case GET_CUSTOMER + '_PENDING':
      return {
        loading: true,
        initialLoad: false,
        creating: false,
        customer: {}
      }
    // Get Customer - Fulfilled
    case GET_CUSTOMER + '_FULFILLED':
      return Object.assign({}, state, {loading: false, customer: action.payload});
    // Update Customer - Fulfilled
    case UPDATE_CUSTOMER + '_FULFILLED':
      return Object.assign({}, state, {customer: Object.assign({}, action.payload) });
    // Delete Customer - Fulfilled
    case DELETE_CUSTOMER + '_FULFILLED':
      return Object.assign({}, state, {initialLoad: true, customer: {} });
    default: return state;
  }
}

// Action Creators
export function showCreateCustomer() {
  return {
    type: SHOW_CREATE_CUSTOMER,
    payload: null
  }
}
export function createCustomer(promise) {
  return {
    type: CREATE_CUSTOMER,
    payload: promise
  }
}

export function getCustomer(promise) {
  return {
    type: GET_CUSTOMER,
    payload: promise
  }
}
export function updateCustomer(promise) {
  return {
    type: UPDATE_CUSTOMER,
    payload: promise
  }
}

export function deleteCustomer(promise) {
  return {
    type: DELETE_CUSTOMER,
    payload: promise
  }
}