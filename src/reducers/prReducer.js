import { FETCH_PR_LOADING, FETCH_PR } from '../actions/prActions';

const initialState = {
  loading: true,
  repos: []
};

export default function prReducer(state= initialState, action){
  switch(action.type){
    case FETCH_PR_LOADING:
      return { ...state, loading: true };
    case FETCH_PR:
      return { ...state, loading: false, prs: action.payload };
    default:
      return state;
  }
}
