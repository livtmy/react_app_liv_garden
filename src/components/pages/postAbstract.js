import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  render() {
      var data = {
          title: this.props.title,
          date: this.props.date,
          image: this.props.image,
          content: this.props.content,
      };

      let path = {
          pathname: '/post',
          state: data,
      };

    return (
      <div className="postAbstract">

        <Link to={path}><h1>{this.props.title}</h1></Link>
        <p>{this.props.date}</p>
        <p>{this.props.summary}</p>
        <img src={this.props.image} alt="Post image" width="27%" height="60%" />

      </div>

    );
  }
}

export default Post;
