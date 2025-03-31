import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Prospects from './components/Prospects';
import Topics from './components/Topics';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className='cd-flex background-section p-4 pt-5' >
        <Header/>

        <Router >
          <Routes >
            <Route path="/" element={<Landing/>} />
            <Route path="/prospects" element={<Prospects/>} />
            <Route path="/topics" element={<Topics/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
        </Router>

        <Footer/>
      </div>
      
    );
  }
}

export default App;
