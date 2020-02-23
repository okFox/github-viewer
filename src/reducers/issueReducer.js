import { FETCH_ISSUE_LOADING, FETCH_ISSUE } from '../actions/issueActions';

const initialState = {
  loading: true,
  issues: []
};

export default function issueReducer(state = initialState, action){
  switch(action.type){
    case FETCH_ISSUE_LOADING:
      return { ...state, loading: true };
    case FETCH_ISSUE:
      return { ...state, loading: false, issues: action.payload };
    default:
      return state;
  }
}