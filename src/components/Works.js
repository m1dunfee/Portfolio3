import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Nucamp from '../img/Nucamp.png'
import CppLogo from '../img/cpp_logo.png'
import JavaLogo from '../img/javaLogo.jpg'
import Owasp from '../img/OWASP.png'

class Works extends Component {

  state = [
    {
      img: Nucamp,
      title: 'Nucamp',
      catagory: 'React',
      details: 'Demo site used for teaching React.',
      url: 'https://nucamp-react-demo-site.herokuapp.com/'
    },
    {
      img: JavaLogo,
      title: 'LetsEncrypt',
      catagory: 'Java',
      details: 'Certificate Authorities and Encryption',
      url: 'https://github.com/m1dunfee/LetsEncrypt'
    },
    {
      img: Owasp,
      title: 'Java Security Audit',
      catagory: 'Java',
      details: 'Auditing, OWASP, and CISA reports',
      url: 'https://github.com/m1dunfee/JavaSecurityAudit'
    },
    {
      img: CppLogo,
      title: 'RSA Encryption',
      catagory: 'C++',
      details: 'The math behide RSA',
      url: 'https://github.com/m1dunfee/RSA-Encryption'
    }
  ]

  render() {
    return (
      <div id='Works'>
        <div className='row pb-3'>
          
          {this.state.map((x)=>(
            <div className='col-md-4'>

            <Card>
              <CardImg top width="100%" src={x.img} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{x.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{x.catagory}</CardSubtitle>
                <CardText>{x.details}</CardText>
                <Button href={x.url} target='_blank'>Button</Button>
              </CardBody>
            </Card>
            
          </div>
          ))}

        </div>
      </div>
    )
  }
}

export default Works;