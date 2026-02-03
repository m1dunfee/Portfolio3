import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Rant from './components/Rant';

class App extends Component {

  // should break out pulse as a react hook
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
      <div className='cd-flex background-section' id="main-top">
        <Header onFooterClick={this.triggerPulse} />

        <div className='App-content p-4'>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/projects" element={<Projects/>} />
              {/* change the following three to dynamic routing and pull collection from params */}
              <Route path="/prospects" element={<Rant collection = "prospects" />} />
              <Route path="/topics" element={<Rant collection ="topics" />} />
              <Route path="/books" element={<Rant collection="books"/>} />
            </Routes>
        </div>

        <Footer pulse={this.state.pulseFooter} />
      </div>
    );
  }
}

export default App;
