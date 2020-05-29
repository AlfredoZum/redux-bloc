import React from 'react';
import { connect } from 'react-redux';
import reducers from '../../reducers';

const TableUsers = ( { users } ) => {

  const putRows = () => (

    users.map( ( user ) => (
      <RowsTableUsers user={user} />
    ))

  );

  return (
    <div>
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
          { users.map(user => <RowsTableUsers key={user.id} {...user} />) }
        </tbody>
      </table>
    </div>
  );
};


const RowsTableUsers = ( { name, email, website } ) => {
  return (
    <tr  >
      <td>{name}</td>
      <td>{email}</td>
      <td>{website}</td>
    </tr>
  );
};

const mapStateToProps = ( reducers ) => {

  return reducers.userReducers;

}



export default connect( mapStateToProps )(TableUsers);