import '@fortawesome/fontawesome-free/css/all.min.css';
import { Component} from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

class Rant extends Component {

  render() {
    const { propsObjectList } = this.props;

    const TextCard = (props) => (
        <>
            <Col xs='12' md="8" className="d-flex">
                <Card className='flex-wrap card card-primary flex-fill'>
                    <h1 className='text-center'>{props.title}</h1>
                    <hr/>
                        {props.paragraph.map((text)=>(
                            <p>{text}</p>    
                        ))}
                    <hr/>

                </Card>
            </Col>
        </>
      );
      
      //gonna have to do some heigt adjustment. text align center but for y axis.
      const ImageCard = (props) => (
        <>
            <Col xs='12' md="4" className="d-flex">
                <Card className='flex-wrap card card-primary flex-fill d-none d-md-block'>
                    <img
                        src={props.img}
                        alt={`subject flavor image`}
                        style={{ width: '100%' }}
                        className='card-img responsive-img'
                    />
                </Card>
            </Col>
        </>
      );

    return (
        <>
            {/* // i might need to take "cards-container" of className in Container out */}
            <Container fluid className='px-0 cards-container' id="ProspectsDynamicTest">  
                {propsObjectList.map((props, index) => (
                    <Row key={index} className="d-flex align-items-stretch py-3">
                        {index % 2 === 0 ? (
                        <>
                            {TextCard(props)}
                            {ImageCard(props)}
                        </>
                        ) : (
                        <>
                            {ImageCard(props)}
                            {TextCard(props)}
                        </>
                        )}
                    </Row>
                ))}
            </Container>
        </>
    );
  }
}

export default Rant;
