import React, { Component } from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Rant from './components/Rant';

// data
import projectData from './components/projectData';
import prospectData from './components/prospectData'
import topicData from './components/topicData';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div className='cd-flex background-section p-4 pt-5' >
        <Header/>

        <Router >
          <Routes >
            <Route path="/" element={<Landing/>} />
            <Route path="/projects" element={<Projects projectList = {projectData}/>} />
            <Route path="/prospects" element={<Rant propsObjectList = {prospectData}/>} />
            <Route path="/topics" element={<Rant propsObjectList = {topicData}/>} />
          </Routes>
        </Router>

        <Footer/>
      </div>
      
    );
  }
}

export default App;
