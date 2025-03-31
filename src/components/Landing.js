import React, { Component } from 'react';
import { Progress, Media, Card } from 'reactstrap';

import ProPic from '../img/Profile_Pic.jpg';


const imgStyle = {
  width: '100%',           // Makes the image responsive to the container's width
  maxWidth: 500,           // Sets a maximum width so it doesn't stretch too large
  display: 'block',        // Ensures the image behaves as a block element
  margin: '0 auto',        // Centers the image horizontally within its container
  height: 'auto',          // Maintains the image's aspect ratio
};


class Landing extends Component {
  render() {
    return (
      <div className='card-container pt-3'>
        <Card id='Landing' className='flex-wrap card card-primary'>
          
          <h4 className='quote '> Never trust the man who claims to know everything; he’s either deceiving himself or you. </h4>
          
          <hr/>

          <div className='row'>

            <div className='col-lg-6 p-2'>
              <Media left href="#">
                <Media object src={ProPic} style={imgStyle} alt="Profile" />
              </Media>
            </div>
            
            <div className="col-lg-6 p-2">
              <div className='container'>

                <div className="row">
                  <h4 className='text-center' >Summary:</h4>
                  <p className='text-center'>
                    Nearly complete with a B.S. in Computer Science. Certifacated fullstack software engineering. Two years as a software engineer for a finaical company. A year of testing in game development. A year of Java development. A year intructing at software bootcamps.        
                  </p>
                </div>

              </div>
            </div>
          </div>
          <hr/>
        </Card>
      </div>
    )
  }
}

export default Landing;