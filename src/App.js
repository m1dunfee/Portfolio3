import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Ai from './components/Ai';
import Bioinfomatics from './components/Bioinfomatics';
import Cybersecurity from './components/Cybersecurity';
import Gamedev from './components/Gamedev';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className='cd-flex background-section p-4 pt-5' >
        <Header/>
        
        <Router >
          <Routes >
            <Route path="/" element={<Landing/>} />
            <Route path="/ai" element={<Ai/>} />
            <Route path="/bioinfomatics" element={<Bioinfomatics/>} />
            <Route path="/cybersecurity" element={<Cybersecurity/>} />
            <Route path="/gamedev" element={<Gamedev/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
        </Router>

        <Footer/>
      </div>
      
    );
  }
}

export default App;
