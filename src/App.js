import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Navigate from './components/navigaterComponent/navigater';
import Homepage from './components/pages/homePage';
import Postpage from './components/pages/postPage';

import './default.css';

class App extends Component {
  render() {
    return (

      <div className="App">

        <div className="body">

          <Header />

          <Router>

            <Route exact path='/' component={Homepage} />
            <Route exact path='/post' component={Postpage} />

            <Navigate />

          </Router>

          <Footer />

        </div>

      </div>

    );
  }
}

export default App;
