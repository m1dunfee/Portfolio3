import React, { Component, useState } from 'react';
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
  constructor(props) {
    super(props);
    this.state = {
      pulseFooter: false
    };
  }

  triggerPulse = () => {
    this.setState({ pulseFooter: true });

    setTimeout(() => {
      this.setState({ pulseFooter: false });
    }, 600); // 600ms or whatever matches your animation
  };


  render() {
    return (
      <div className='cd-flex background-section'>
        <Header onFooterClick={this.triggerPulse} />

        <div className='App-content p-3 pt-2'>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/projects" element={<Projects projectList={projectData} />} />
              <Route path="/prospects" element={<Rant propsObjectList={prospectData} />} />
              <Route path="/topics" element={<Rant propsObjectList={topicData} />} />
            </Routes>
          </Router>
        </div>

        <Footer pulse={this.state.pulseFooter} />
      </div>
    );
  }
}

export default App;
