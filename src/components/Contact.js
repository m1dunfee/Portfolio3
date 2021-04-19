import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className='text-center'>
        <h2>Contact Me</h2>
        <p className='py-2'>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
        <div className='row'>

          <div className='col-4'>
            <h4> Phone </h4>
            <br/>
            <a href="tel:612-433-9726" className='text-center'>(612)-433-9726</a>
          </div>

          <div className='col-4'>
            <h4> Email </h4>
            <br/>
            <a href = "mailto: Matthew.dunfee42@gmail.com" className='text-center'>matthew.dunfee42@gmail.com</a>
          </div>

          <div className='col-4'>
          <h4> Location </h4>
            <br/>

          </div>

        </div>
      </div>
    )
  }
}

export default Contact;