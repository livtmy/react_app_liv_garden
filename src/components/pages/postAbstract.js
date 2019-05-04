import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
      var data = {
          index: this.props.index,
      };

      let path = {
          pathname: '/post',
          state: data,
      };

    return (

      <div className="flowerImageLink">

        <Link to={path}><img src={this.props.image} alt="Post image" width="320px" height="240px" /></Link>

      </div>

    );
  }
}

export default Post;
