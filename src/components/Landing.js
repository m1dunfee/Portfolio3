import React, { Component } from 'react';
import { Progress, Media, Card } from 'reactstrap';

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
                <Media object src={'/Profile_Pic.jpg'} style={imgStyle} alt="Profile" />
              </Media>
            </div>
            <div className="col-lg-6 p-2">
              <div className='container'>
                <div className="row">
                  <h4 className='text-center' >Summary:</h4>
                  <p>
                    I'm Matthew Dunfee — a computer scientist with a foundation built through hands-on industry experience and a vision aimed toward AI, systems design, and problem-solving at scale.
                  </p>
                  <p>
                    In the past, I’ve worn a lot of hats: game tester, Java developer, MERN consultant, full-stack bootcamp instructor. Each role sharpened a different edge — from catching bugs at Activision to supporting Enterprise software, to mentoring students as they launched their first solo projects. I’ve worked across the stack and across environments — Oracle, Node, React, Pick Basic, Spring Boot — always focused on learning the systems beneath the syntax.
                  </p>
                  <p>
                    Today, I’m nearing completion of my B.S. in Computer Science with a 3.7 GPA, while continuing to grow as a developer. I value clean architecture, strategic debugging, and the ability to move between abstraction and implementation. I see programming as both an art and a craft — one that requires discipline, curiosity, and clarity of thought.
                  </p>
                  <p>
                    Looking ahead, I’m working toward building systems that combine IoT and AI — tools that aren’t just responsive, but adaptive. I’m especially interested in the ethical and structural design of software: how we build systems that respect autonomy, privacy, and purpose. My current projects reflect that ambition.
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