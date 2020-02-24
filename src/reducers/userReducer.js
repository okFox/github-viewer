import {  FETCH_USER_LOADING, FETCH_USER } from '../actions/userActions';

const initialState = {
  loading: true,
  user: ''
};

export default function userReducer(state = initialState, action){
  switch(action.type){
    case FETCH_USER_LOADING:
      return { ...state, loading: true };
    case FETCH_USER:
      return { ...state, loading: false, payload: action.payload };
    default:
      return state;
  }
}
