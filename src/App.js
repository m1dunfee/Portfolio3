import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

class App extends Component {
  render(){
    return (
      <div className='cd-flex background-section' >
        <Header/>
        <div className=" container mt-3 pt-5 pb-4">
          <AboutMe/>
          <Projects/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
