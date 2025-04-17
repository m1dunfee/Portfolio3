import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Fade } from 'reactstrap';
import projectData from './projectData';

class Projects extends Component {
  state = {
    activeIndexes: {},
    fadeStates: {}, // This will track `in` state for each card/image
  };
  

  // Method to go to the next image for a specific project
  nextImage = (index) => {
    this.setState((prevState) => {
      const currentIndex = prevState.activeIndexes[index] || 0;
      const imgCount = projectData[index].img.length;
      const nextIndex = (currentIndex + 1) % imgCount;
  
      // Flip the fade state (true -> false -> true)
      const currentFade = prevState.fadeStates[index] ?? true;
  
      return {
        activeIndexes: {
          ...prevState.activeIndexes,
          [index]: nextIndex,
        },
        fadeStates: {
          ...prevState.fadeStates,
          [index]: false, // temporarily disable fade
        },
      };
    }, () => {
      // Turn fade back on after a short delay to retrigger animation
      setTimeout(() => {
        this.setState((prevState) => ({
          fadeStates: {
            ...prevState.fadeStates,
            [index]: true,
          },
        }));
      }, 20); // delay can be short — just enough for React to notice the state change
    });
  };
  

  // Method to go to the previous image for a specific project
  previousImage = (index) => {
    this.setState((prevState) => {
      const currentIndex = prevState.activeIndexes[index] || 0;
      const imgCount = projectData[index].img.length;
      const nextIndex = (currentIndex - 1 + imgCount) % imgCount; // only difference in nextImage and previousImage
  
      // Flip the fade state (true -> false -> true)
      const currentFade = prevState.fadeStates[index] ?? true;
  
      return {
        activeIndexes: {
          ...prevState.activeIndexes,
          [index]: nextIndex,
        },
        fadeStates: {
          ...prevState.fadeStates,
          [index]: false, // temporarily disable fade
        },
      };
    }, () => {
      // Turn fade back on after a short delay to retrigger animation
      setTimeout(() => {
        this.setState((prevState) => ({
          fadeStates: {
            ...prevState.fadeStates,
            [index]: true,
          },
        }));
      }, 20); // delay can be short — just enough for React to notice the state change
    });
  };

  render() {
    const { projectList } = this.props;
    const { activeIndexes, fadeStates } = this.state;

    return (
      <div id="Projects" className='cards-container '>
        <div className="row">
          {projectList.map((project, index) => (
            <div className="col-md-4 py-3 text-center d-flex justify-content-center" key={index}>
              <Card className="card card-primary">
                <div className="custom-slider card-img-container">
                  <Fade in={fadeStates[index] ?? true}>
                    <img
                      src={project.img[activeIndexes[index] || 0]}
                      alt={`Slide ${activeIndexes[index] || 0}`}
                      style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
                      className='img-fluid'
                    />
                  </Fade>
                  <div className="slider-controls">
                    <button className="slider-button" onClick={() => this.previousImage(index)}>
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="slider-button" onClick={() => this.nextImage(index)}>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                <CardBody>
                  <CardTitle tag="h5">{project.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {project.category}
                  </CardSubtitle>
                  <CardText>{project.details}</CardText>
                  <Button outline color="primary" href={project.url} target='_blank' rel="noopener noreferrer">
                    Visit Project
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
