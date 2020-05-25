import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super();
    this.state = {
      users : []
    };
  }

  componentDidMount(){
    this.setState({
      users : [
        {
          name: 'Alfredo Zum',
          email : 'alfredo.conomia@gmail.com',
          link: 'www.alfredoZum.com'
        },
        {
          name: 'Pancho pantera',
          email : 'pancho.pantera@gmail.com',
          link: 'www.panchoPantera.com'
        },
      ]
    });
  }

  putRows = () => (

    this.state.users.map( ( user ) => (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.link}</td>
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

export default App;
