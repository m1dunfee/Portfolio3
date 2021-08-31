import React, { Component } from 'react';
import { Media, Badge, Button } from 'reactstrap';
import ProPic from '../img/Profile_Pic.jpg';

const imgStyle = {
  maxHeight: 'auto',
  maxWidth: 500
};

class Home extends Component {
  render() {
    return (
      <div id='Home' className='row'>
        <div className='my-auto col-6'>

          <div className='row'>
            <h1><Badge color='primary' className='py-2'> Fullstack Software Engineer </Badge></h1>
          </div>

          <div className='row py-2'>
          As a Frontend Developer, I’ve helped teach and taught classes myself on topics from HTML, CSS, JavaScript to React and Redux. As a Backend Engineer, I’ve untangled spaghetti code and converted stored procedures with archaic hydration methods into testable decoupled servers and their respective databases. Delivering high quality code is part of my passion.
          </div>
          <div className='row py-2'>
            <Button outline color="primary">Triditional Resume</Button> 
            <Button outline color="primary">libraries and frameworks</Button>
          </div>

        </div>

        <div className='col-6'>
          <Media left href="#">
            <Media object src={ProPic} style={imgStyle} alt="Generic test image" />
          </Media>
        </div>

      </div>
    );
  }
};

export default Home;