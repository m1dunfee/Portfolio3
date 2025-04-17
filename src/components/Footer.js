import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneSquareAlt, faMapMarkerAlt, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Col, Container, Row} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Container fluid id="Footer" className="px-0 mx-0">
        <Card className="card card-primary text-center w-100 px-0 mx-0 border-0 rounded-0">
      
          <Row className="w-100 m-0 py-2">
            <Col>
              <FontAwesomeIcon icon={faFilePdf} className='fa-2x'/>
              <h4>Resume?</h4>
              <hr />
              <Button outline color="primary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download PDF Resume
              </Button>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faPhoneSquareAlt} className='fa-2x'/>
              <h4>Phone</h4>
              <hr />
              <a href="tel:763-393-7899">(763)-393-7899</a>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faEnvelope} className='fa-2x'/>
              <h4>Email</h4>
              <hr />
              <a href="mailto:Matthew.dunfee42@gmail.com">matthew.dunfee42@gmail.com</a>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='fa-2x'/>
              <h4>Location</h4>
              <hr />
              <a href="https://www.google.com/maps/place/Burnsville,+MN+55306" target="_blank" rel="noopener noreferrer">
                Burnsville, MN
              </a>
            </Col>
          </Row>
      
        </Card>
      </Container>
    
    )
  }
}

export default Footer;