import {  FETCH_REPO_LOADING, FETCH_REPO } from '../actions/repoActions';

const initialState = {
  loading: true,
  repos: []
};

export default function repoReducer(state = initialState, action){
  switch(action.type){
    case FETCH_REPO_LOADING:
      return { ...state, loading: true };
    case FETCH_REPO:
      return { ...state, loading: false, repos: action.payload };
    default:
      return state;
  }
}
