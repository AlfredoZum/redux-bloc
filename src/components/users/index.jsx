import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import Spinner from '../../general/Spinner.jsx';
import Error from '../../general/Error.jsx';
import TableUsers from './TableUsers.jsx';

class Users extends Component {

  componentDidMount(){
    this.props.getAll();
  }

  putContent = () => {

    if( this.props.loading ){
      return <Spinner />;
    }

    if( this.props.error ){
      return <Error error={ this.props.error } />;
    }

    return <TableUsers />
  }

  render(){

    return (
      <div >
        <h1>Hola, Lista de usuarios</h1>
        { this.putContent() }
      </div>
    );

  }
}

const mapStateToProps = ( reducers ) => {

  return reducers.userReducers;

}

export default connect( mapStateToProps, userActions )(Users);
