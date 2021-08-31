import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneSquareAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
  render() {
    return (
      <div id='Contact' className='text-center pb-4'>
        <h2>Contact Me</h2>
        <p className='py-3'>Fullstack Engineering isn't just the developing solutions for the client and server.</p>
        <div className='row'>

          <div className='col-4'>
            <FontAwesomeIcon icon={faPhoneSquareAlt} className='fa-2x'/>
            <h4> Phone </h4>
            <hr />
            <a href="tel:612-433-9726" className='text-center'>(612)-433-9726</a>
          </div>

          <div className='col-4'>
            <FontAwesomeIcon icon={faEnvelope} className='fa-2x'/>
            <h4> Email</h4>
            <hr />
            <a href="mailto: Matthew.dunfee42@gmail.com" className='text-center'>matthew.dunfee42@gmail.com</a>
          </div>

          <div className='col-4'>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='fa-2x'/>
            <h4> Location </h4>
            <hr />
            <a href="https://www.google.com/maps/place/Burnsville,+MN+55306/@44.7318007,-93.306137,14z/data=!3m1!4b1!4m5!3m4!1s0x87f63a262759969d:0xde94acb813416fe!8m2!3d44.7329713!4d-93.2935778" target='_blank' className='text-center'>Burnsville, MN</a>
          </div>

        </div>
      </div>
    )
  }
}

export default Contact;