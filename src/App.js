import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import Header from './app/components/common/Header';
import Home from './app/components/pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        
          {/* HEADER COMPONENT */}
          <Header />

          {/* HOME COMPONENT */}
          <Home />
        
      </div>
    );
  }
}

export default App;
