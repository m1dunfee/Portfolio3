import React, { Component } from 'react';
import Header from './staticComponents/Header';
import Footer from './staticComponents/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Works';
import Contact from './components/Contact';
import Services from './components/Services';
import Feedback from './components/Feedback';

class App extends Component {
  render(){
    return (
      <div className='container-fluid'>
        <Header/>
        <div className="container-xl">
          <Home/>
          <hr/>
          {/* <Resume/>
          <hr/> */}
          <Projects/>
          <hr/>
          <Services/>
          <hr/>
          <Contact/>
          <hr/>
          <Feedback/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
