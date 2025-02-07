import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Overview from './components/Overview';
import Ai from './components/Ai';
import Bio from './components/Bio';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      //FIXME padding under the header isn't right
      <div className='cd-flex background-section p-4 pt-5' >
        <Header style = {{background: 'blue'}} />

        {/*FIXME add these links to the header or create a secondary header */}
          {/* <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav> */}

        <Router >
          <Routes >
            {/* FIXME add more pages here */}
            <Route path="/" element={<Overview/>} />
            <Route path="/ai" element={<Ai/>} />
            <Route path="/bio" element={<Bio/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
          
        </Router>

        <Footer/>
      </div>
      
    );
  }
}

export default App;
