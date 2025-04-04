import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component} from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

class Prospects extends Component {

  render() {
    const { propsObjectList } = this.props;

    const TextCard = (prospect) => (
        <>
            <Col xs='12' md="8" className="d-flex">
                <Card className='flex-wrap card card-primary flex-fill'>
                    <h1 className='text-center'>{prospect.title}</h1>
                    <hr/>
                        {prospect.paragraph.map((text)=>(
                            <p>{text}</p>    
                        ))}
                    <hr/>

                </Card>
            </Col>
        </>
      );
      
      //gonna have to do some heigt adjustment. text align center but for y axis.
      const ImageCard = (prospect) => (
        <>
            <Col xs='12' md="4" className="d-flex" d-none d-md-block>
                <Card className='flex-wrap card card-primary flex-fill'>
                    <img
                        src={prospect.img}
                        alt={`subject flavor image`}
                        style={{ width: '100%' }}
                        className='card-img'
                    />
                </Card>
            </Col>
        </>
      );

    return (
        <>
            {/* // i might need to take "cards-container" of className in Container out */}
            <Container fluid className='px-0 cards-container' id="ProspectsDynamicTest">  
                {propsObjectList.map((prospect, index) => (
                    <Row key={index} className="d-flex align-items-stretch py-3">
                        {index % 2 === 0 ? (
                        <>
                            {TextCard(prospect)}
                            {ImageCard(prospect)}
                        </>
                        ) : (
                        <>
                            {ImageCard(prospect)}
                            {TextCard(prospect)}
                        </>
                        )}
                    </Row>
                ))}
            </Container>
        </>
    );
  }
}

export default Prospects;
