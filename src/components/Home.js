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
      <div className='row pt-3'>
        <div className='my-auto col-6'>

          <div className='row'>
            <h1><Badge color='primary' className='py-2'> Media heading </Badge></h1>
          </div>

          <div className='row py-2'>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>

          <div className='row py-2'>
            <Button outline color="primary">Hire Me</Button> 
            <Button outline color="primary">Download CV (font-awesome)</Button>
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