import React, { Component } from 'react';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getNews();
    this.interval = setInterval(() => {
        this.getNews();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }

  getNews() {
    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=')
      .then(data => data.json())
      .then(data => {
        this.setState({
          googleNews: data,
        })
      })
  }

  render() {
    if (!this.state.googleNews) {
      return <p>Loading...</p>
    }
    const news = this.state.googleNews.articles;
    let titles = Array(10).fill(null);
    let urls = Array(10).fill(null);
    if (news.length >= 5) {
        titles = news.map(obj => {
          return obj.title;
        });
        urls = news.map(obj => {
            return obj.url;
        });
    }
    return (
      <div>
        <p className="googlenews">Top news from Google:</p>
        <ul>
          <li><a href={urls[0]} target="_blank">{titles[0]}</a></li>
          <li><a href={urls[1]} target="_blank">{titles[1]}</a></li>
          <li><a href={urls[2]} target="_blank">{titles[2]}</a></li>
          <li><a href={urls[3]} target="_blank">{titles[3]}</a></li>
          <li><a href={urls[4]} target="_blank">{titles[4]}</a></li>
        </ul>
        <a className="link" href="https://newsapi.org" target="_blank">Powered by News API</a>
      </div>
    );
  }
}

export default News;
