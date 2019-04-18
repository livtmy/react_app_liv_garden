import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import News from './news';

class Navigate extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>
          <h3>HOME</h3>
        </Link>

        <div className="news">
          <News />
        </div>

      </nav>
    );
  }
}

export default Navigate;
