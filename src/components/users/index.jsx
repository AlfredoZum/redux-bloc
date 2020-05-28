import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';

class Users extends Component {

  componentDidMount(){
    this.props.getAll();
  }

  putRows = () => (

    this.props.users.map( ( user ) => (
      <tr key={ user.id } >
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))

  );

  render(){
    return (
      <div >
        <table className="tabla" >
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlaze
              </th>
            </tr>
          </thead>
          <tbody>
            { this.putRows() }
          </tbody>
        </table>
      </div>
    );

  }
}

const mapStateToProps = ( reducers ) => {

  return reducers.userReducers;

}

export default connect( mapStateToProps, userActions )(Users);
