import React from 'react';

const Error = ( { error } ) => {
  console.log( error );
  return (
    <div className=".bg-color-primary" >
      <h2 className="center text-color-red" >
        Ups!, An error occurred while obtaining the information
        <p>{ error }</p>
      </h2>
    </div>
  );
};

export default Error;