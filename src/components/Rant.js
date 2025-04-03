import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { Component} from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

class Prospects extends Component {
  state = {
    activeIndexes: {}, // Keeps track of the active image index for each project
  };



  render() {
    const { propsObjectList } = this.props;

    return (
        <>
            {/* // i might need to take "cards-container" out */}
            <Container fluid className='px-0 cards-container' id="ProspectsDynamicTest">  
                {propsObjectList.map((prospect, index) => (
                    <Row key={index} className="d-flex align-items-stretch py-3">
                        {index % 2 === 0 ? (
                        <>
                            <Col xs='12' md="8" className="d-flex">
                                <Card className='flex-wrap card card-primary flex-fill'>
                                    <h1 className='text-center'>Artificial Intelligence</h1>
                                    <h3 className='quote'>We stand of the shoulders of giants. - Isaac Newton</h3>
                                    <hr/>
                                    <p>
                                    The classical philosopher Plato was skeptical of overspecialization in education. He feared students’ wisdom would suffer as the education system failed to span the elucidation space of knowledge. If you spend all your time in one area, how can you navigate and correlate that information across different disciplines?
                                    </p>
                                    <p>
                                    This is a valid point—omniscience impossible for any human. Knowledge is too vast and time too finite. However, we do not need to know every curve of King Hieron II crown to find out how much gold is in it. We could spend our entire lives trying to rebuild the ‘wheels’ that turn society just to understand our current position. 
                                    </p>
                                    <p>
                                    Abstraction is the key to navigating complex systems. Today we face an ever-accelerating pace of life—from societal obligations to rapid technological advancements, and even the eventual heat death of the universe. We don’t have the luxury time to reinvent the wheel.  
                                    </p>
                                    <p>
                                    Sir Isaac Newton was right when he said, “we stand on the shoulders of giants.” By abstracting the work of those who came before us, we can scale our productivity to overcome the distortions of time’s entropy and adapt to changing circumstances.
                                    </p>
                                    <p>
                                    On that note, LLMs and ML are important tools in the school of abstraction. They use mathematical principles to uncover relationships in data and detect common patterns. A trait often deemed utterly human ‘pattern seeking behavior’ so it’s only natural that we use AI to replicate and extend our own capabilities.
                                    </p>
                                    <p>
                                    sub topic of interest: 
                                    - LLMs linguistic relativity
                                    </p>
                                    <hr/>
                
                                </Card>
                            </Col>
                            <Col xs='12' md="4" className="d-flex" d-none d-md-block>
                                <Card className='flex-wrap card card-primary flex-fill'>
                                add image
                                </Card>
                            </Col>
                        </>
                        ) : (
                        <>
                            <Col xs='12' md="4" className="d-flex" d-none d-md-block>
                                <Card className='flex-wrap card card-primary flex-fill'>
                                add image
                                </Card>
                                </Col>
                                <Col xs='12' md="8" className="d-flex">
                                <Card className='flex-wrap card card-primary flex-fill'>
                                    
                                    <h1 className='text-center'>Artificial Intelligence</h1>
                                    <h3 className='quote'>We stand of the shoulders of giants. - Isaac Newton</h3>
                                    <hr/>
                                    <p>
                                    The classical philosopher Plato was skeptical of overspecialization in education. He feared students’ wisdom would suffer as the education system failed to span the elucidation space of knowledge. If you spend all your time in one area, how can you navigate and correlate that information across different disciplines?
                                    </p>
                                    <p>
                                    This is a valid point—omniscience impossible for any human. Knowledge is too vast and time too finite. However, we do not need to know every curve of King Hieron II crown to find out how much gold is in it. We could spend our entire lives trying to rebuild the ‘wheels’ that turn society just to understand our current position. 
                                    </p>
                                    <p>
                                    Abstraction is the key to navigating complex systems. Today we face an ever-accelerating pace of life—from societal obligations to rapid technological advancements, and even the eventual heat death of the universe. We don’t have the luxury time to reinvent the wheel.  
                                    </p>
                                    <p>
                                    Sir Isaac Newton was right when he said, “we stand on the shoulders of giants.” By abstracting the work of those who came before us, we can scale our productivity to overcome the distortions of time’s entropy and adapt to changing circumstances.
                                    </p>
                                    <p>
                                    On that note, LLMs and ML are important tools in the school of abstraction. They use mathematical principles to uncover relationships in data and detect common patterns. A trait often deemed utterly human ‘pattern seeking behavior’ so it’s only natural that we use AI to replicate and extend our own capabilities.
                                    </p>
                                    <p>
                                    sub topic of interest: 
                                    - LLMs linguistic relativity
                                    </p>
                                    <hr/>

                                </Card>
                            </Col>
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
