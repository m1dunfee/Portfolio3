import React, { Component } from 'react';
import Header from './staticComponents/Header';

import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

import Services from './components/Services';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <div className='container'>
          <Home/>
          <hr/>
          <Services/>
          <hr/>
          <Resume/>
          <hr/>
          <Projects/>
          <hr/>
          <Contact/>
        </div>

      </div>
    );
  }
}

export default App;
