import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Postpage from './components/pages/postPage';

import './default.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="body">

            <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/post' component={Postpage} />

            <Footer />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
