import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import projectData from './projectData';

class Works extends Component {
  state = {
    activeIndexes: {}, // Keeps track of the active image index for each project
  };

  // Method to go to the next image for a specific project
  nextImage = (index) => {
    this.setState((prevState) => {
      const currentIndex = prevState.activeIndexes[index] || 0;
      const nextIndex = (currentIndex + 1) % projectData[index].img.length;
      return {
        activeIndexes: {
          ...prevState.activeIndexes,
          [index]: nextIndex,
        },
      };
    });
  };

  // Method to go to the previous image for a specific project
  previousImage = (index) => {
    this.setState((prevState) => {
      const currentIndex = prevState.activeIndexes[index] || 0;
      const prevIndex = (currentIndex - 1 + projectData[index].img.length) % projectData[index].img.length;
      return {
        activeIndexes: {
          ...prevState.activeIndexes,
          [index]: prevIndex,
        },
      };
    });
  };

  render() {
    const { activeIndexes } = this.state;

    return (
      <div id="Works" className='cards-container'>
        <div className="row pb-3">
          {projectData.map((project, index) => (
            <div className="col-md-4" key={index}>
              <Card className="card-primary">
                <div className="custom-slider">
                  <img
                    src={project.img[activeIndexes[index] || 0]}
                    alt={`Slide ${activeIndexes[index] || 0}`}
                    style={{ width: '100%' }}
                  />
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
                  <Button outline color="primary" href={project.url} target="_blank">
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

export default Works;
