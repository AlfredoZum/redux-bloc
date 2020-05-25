import React from 'react';
import { Link } from 'react-router-dom';

const  Menu = ( props ) => (
  <nav id="menu" >
    <div>
      <Link to='/' >
        User
      </Link>
      <Link to='/task' >
        Task
      </Link>
    </div>
  </nav>
);

export  default Menu;
