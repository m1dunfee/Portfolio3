import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Nucamp from '../img/Nucamp.png'

class Works extends Component {

  state = [
    {
      img: Nucamp,
      title: 'Nucamp',
      catagory: 'Educational',
      details: 'Demo site used for teaching React.',
      url: 'https://nucamp-react-demo-site.herokuapp.com/'
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