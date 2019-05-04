import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          Liv's garden
        </div>

        <div className="homeLink">

          <Link to='/'><h3>HOME</h3></Link>

        </div>

      </header>
    );
  }
}

export default Header;
