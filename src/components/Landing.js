import React, { Component } from 'react';
import { Media, Card } from 'reactstrap';

const imgStyle = {
  width: '100%',           // Makes the image responsive to the container's width
  maxWidth: 300,           // Sets a maximum width so it doesn't stretch too large
  display: 'block',        // Ensures the image behaves as a block element
  margin: '0 auto',        // Centers the image horizontally within its container
  height: 'auto',          // Maintains the image's aspect ratio
};

class Landing extends Component {
  render() {
    return (
      <div className='card-container pt-3'>
        <Card id='Landing' className='flex-wrap card card-primary'>
          <blockquote className="quote">
            The future isn’t built from isolated breakthroughs—it’s built from integrated visions.
            {/* <cite>– Sir Isaac Newton</cite> */}
          </blockquote>
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
                    I'm Matthew Dunfee, a computer scientist with extensive industry experience and a clear vision centered around abstraction, modularity, and functional modeling to build meaningful technology integrating AI, IoT, and scalable systems.
                  </p>
                  <p>
                    My journey in technology has been diverse, transforming me into an adaptable and strategic problem solver. From tracking down critical bugs at Activision and developing enterprise Java applications to mentoring aspiring developers through full-stack bootcamps, I’ve consistently translated theoretical concepts into practical solutions. Each experience sharpened my skills in designing modular, maintainable systems grounded in robust architecture.
                  </p>
                  <p>
                    As I complete my B.S. in Computer Science (3.7 GPA), I remain dedicated to constructing software characterized by clear abstraction, effective modularity, and logical integrity. To me, programming involves defining precise functional models that unambiguously capture and express system behavior.
                  </p>
                  <p>
                    Looking forward, my goal is to engineer intelligent, adaptive systems capable of anticipating and responding effectively to human needs. I’m especially committed to creating solutions that uphold ethical integrity, user privacy, and purposeful design. Current projects, including Prismatica—an AI-integrated IoT hub—illustrate my ambition to develop impactful, secure, and responsive technologies.
                  </p>
                  <p>
                    I don’t merely envision the future; I architect it through precise, modular, and purposeful design.
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