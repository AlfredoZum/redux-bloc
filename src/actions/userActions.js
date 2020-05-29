import axios from 'axios';
import { actionTypeUsers } from '../types/userstypes';

export const getAll = () => async ( dispatch ) => {

  dispatch({
    type : actionTypeUsers.LOADING,
  });

  try{

    const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' );

    dispatch({
      type : actionTypeUsers.GET_ALL_USERS,
      payload: response.data
    })

  }catch( error ){

    dispatch({
      type : actionTypeUsers.ERROR,
      payload: error.message
    })

  }

}