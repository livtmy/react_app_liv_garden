import React, { Component } from 'react';

import Post from './postAbstract'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getFlowers();
  }

  getFlowers() {
    fetch('http://192.168.99.100:49160/flowers')
      .then(data => data.json())
      .then(data => {
        this.setState({
          flowers: data,
        })
      });
  }

  renderPost(i, imageURL) {
    return (
      <Post
        index={i}
        image={imageURL}
      />
    );
  }

  renderPosts(arr) {
    return arr.map(item =>
        this.renderPost(item.id, item.image)
    );
  }

  render() {
    if (!this.state.flowers) {
      return <p>Loading...</p>
    }
    var json = this.state.flowers;
    var arr = [];
    Object.keys(json).forEach(function(key) {
        arr.push(json[key]);
    });
    return (
      <div>
        <main>
          {this.renderPosts(arr)}
        </main>
      </div>
    );
  }
}

export default Homepage;
