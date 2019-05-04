import React, { Component } from 'react';

class Postpage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    var baseURL = 'http://192.168.99.100:49160/flowers/';
    var index = this.props.location.state.index;
    var url = baseURL + index;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          flowerInfo: data,
        })
      })
  }

  render() {
    if (!this.state.flowerInfo) {
      return <p>Loading...</p>
    }
    return (
      <div className="flowerInfo">
        <main>

          <h1>{this.state.flowerInfo.name}</h1>

          <img src={this.state.flowerInfo.image} alt="Post image" width="320px" height="240px" />

          <div>

            <p>{this.state.flowerInfo.desc}</p>

          </div>

        </main>
      </div>
    );
  }
}

export default Postpage;
