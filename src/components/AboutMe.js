import React, { Component } from 'react';
import { Progress, Media } from 'reactstrap';
import ProPic from '../img/Profile_Pic.jpg';


const imgStyle = {
  maxHeight: 'auto',
  maxWidth: 500
};


class AboutMe extends Component {
  render() {
    return (
      <div className='container flex-wrap'>
        
        <h4 className='quote p-5'> Never trust the man who claims to know everything; he’s either deceiving himself or you. </h4>
        
        <hr/>

        <div className='row'>

          <div className='col-6'>
            <Media left href="#">
              <Media object src={ProPic} style={imgStyle} alt="Generic test image" />
            </Media>
          </div>
          
          <div className="col-6">
            <div className='container'>

              <div className="row">
                <h4 className='text-center' >I brief over view:</h4>
                <p className='text-center'>
                   Nearly complete with a B.S. in Computer Science. Certifacated fullstack software engineering. Two years as a software engineer for a finaical company. A year of testing in game development. A year of Java development. A year intructing at software bootcamps.        
                </p>
              </div>

              <div className='row'>  
                <div id='Services'>
                  <div className="text-center"> Javascript</div>
                  <Progress value="75" />
                  <div className="text-center"> C/C++</div>
                  <Progress value="65" />
                  <div className="text-center"> Python</div>
                  <Progress value="70" />
                  <div className="text-center"> Java</div>
                  <Progress value="50" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;