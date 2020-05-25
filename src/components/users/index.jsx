import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {

  constructor(){
    super();
    this.state = {
      users : []
    };
  }

  async componentDidMount(){

    const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' );

    this.setState({
      users : response.data
    });
  }

  putRows = () => (

    this.state.users.map( ( user ) => (
      <tr key={ user.id } >
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ))

  );

  render(){

    return (
      <div className="margen" >
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

export default Users;
