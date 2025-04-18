import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Fade,
  Container,
  Row,
  Col
} from 'reactstrap';
import projectData from './projectData';

class Projects extends Component {
  state = {
    activeIndexes: {},   // Tracks which image is active for each card
    fadeStates: {},      // Controls whether the image is fading in/out
  };

  // Handles cycling to the next image in a project's image array
  nextImage = (index) => {
    this.setState((prevState) => {
      const currentIndex = prevState.activeIndexes[index] || 0;
      const imgCount = projectData[index].img.length;
      const nextIndex = (currentIndex + 1) % imgCount;

      return {
        activeIndexes: {
          ...prevState.activeIndexes,
          [index]: nextIndex,
        },
        fadeStates: {
          ...prevState.fadeStates,
          [index]: false, // Start fade-out
        },
      };
    }, () => {
      // Trigger a brief reset so fade-in can re-apply
      setTimeout(() => {
        this.setState((prevState) => ({
          fadeStates: {
            ...prevState.fadeStates,
            [index]: true, // Fade back in
          },
        }));
      }, 20); // Just enough delay for React to detect the state flip
    });
  };

  // Handles cycling to the previous image
  previousImage = (index) => {
    this.setState((prevState) => {
      const currentIndex = prevState.activeIndexes[index] || 0;
      const imgCount = projectData[index].img.length;
      const prevIndex = (currentIndex - 1 + imgCount) % imgCount;

      return {
        activeIndexes: {
          ...prevState.activeIndexes,
          [index]: prevIndex,
        },
        fadeStates: {
          ...prevState.fadeStates,
          [index]: false,
        },
      };
    }, () => {
      setTimeout(() => {
        this.setState((prevState) => ({
          fadeStates: {
            ...prevState.fadeStates,
            [index]: true,
          },
        }));
      }, 20);
    });
  };

  render() {
    const { projectList } = this.props;
    const { activeIndexes, fadeStates } = this.state;

    return (
      <Container fluid id="Projects" className="cards-container">
        <Row>
          {projectList.map((project, index) => (
            <Col md="4" className="py-3 d-flex justify-content-center" key={index}>
              <Card className="card-primary w-100">
                
                {/* Image Slider with Fade Transition */}
                <div className="custom-slider card-img-container">
                  <Fade in={fadeStates[index] ?? true}>
                    <img
                      src={project.img[activeIndexes[index] || 0]}
                      alt={`Slide ${activeIndexes[index] || 0}`}
                      style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
                      className="img-fluid"
                    />
                  </Fade>

                  {/* Navigation Buttons */}
                  <div className="slider-controls">
                    <Button
                      color="link"
                      className="slider-button p-0"
                      onClick={() => this.previousImage(index)}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </Button>
                    <Button
                      color="link"
                      className="slider-button p-0"
                      onClick={() => this.nextImage(index)}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </Button>
                  </div>
                </div>

                {/* Text Content */}
                <CardBody>
                  <CardTitle tag="h5">{project.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {project.category}
                  </CardSubtitle>
                  <CardText>{project.details}</CardText>
                  <Button
                    outline
                    color="primary"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Projects;
