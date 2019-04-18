import React, { Component } from 'react';

class Postpage extends Component {

  render() {
    return (
      <div className="postPage">
        <main>
          <h1 className="center">{this.props.location.state.title}</h1>
          <p className="center">{this.props.location.state.date}</p>
          <img src={this.props.location.state.image} alt="Post image" width="320px" height="240px" />
          <div>
            {this.props.location.state.content.map(paragraph => {
                return (<p>{paragraph}</p>);
              })
            }
          </div>
        </main>
      </div>
    );
  }
}

export default Postpage;
