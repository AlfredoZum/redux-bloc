import { actionTypeUsers } from '../types/userstypes';

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: '',
};

export default ( state = INITIAL_STATE, action ) => {
  switch( action.type ){
    case actionTypeUsers.GET_ALL_USERS : 
      return { 
        ...state, 
        users: action.payload,
        loading : false,
      }
    case actionTypeUsers.LOADING :
      return { ...state, loading: true };
    case actionTypeUsers.ERROR :
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}