import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Nucamp from '../img/Nucamp.png'

class Works extends Component {
  render() {
    return (
      <div id='Works'>
        <div className='row pb-3'>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src={Nucamp} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Nucamp</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Educational</CardSubtitle>
                <CardText>Demo site used for teaching React.</CardText>
                <Button href='https://nucamp-react-demo-site.herokuapp.com/' target='_blank'>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card>
              <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Works;