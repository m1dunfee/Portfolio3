import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneSquareAlt, faMapMarkerAlt, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Container, Row} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <Container fluid id="Footer" className="footer px-0 mx-0">
        <Row className={`w-100 m-0 py-2 text-center w-100 px-0 mx-0 border-0 rounded-0 ${this.props.pulse ? 'pulse-fade' : ''}`}>
          <Col sm>
            <FontAwesomeIcon icon={faFilePdf} className='fa-2x'/>
            <h4>Resume/CV</h4>
            <Button outline color="primary" href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              Download PDF Resume
            </Button>
            <hr />
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={faPhoneSquareAlt} className='fa-2x'/>
            <h4>Phone</h4>
            <Button outline color="primary" href="tel:763-393-7899">(763)-393-7899</Button>
            <hr />
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={faEnvelope} className='fa-2x'/>
            <h4>Email</h4>
            <Button outline color="primary" href="mailto:Matthew.dunfee42@gmail.com">matthew.dunfee42@gmail.com</Button>
            <hr />
          </Col>
          <Col sm>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='fa-2x'/>
            <h4>Location</h4>
            <Button outline color="primary" href="https://www.google.com/maps/place/Burnsville,+MN+55306" target="_blank" rel="noopener noreferrer">
              Burnsville, MN
            </Button>
            <hr />
          </Col>
        </Row>
      </Container>
    
    )
  }
}

export default Footer;