import { Card, Container } from 'reactstrap';

const imgStyle = {
  width: '100%',
  maxWidth: 300,
  display: 'block',
  margin: '0 auto',
  height: 'auto',
};

const AboutMe = () => {
  return (
    <div className='card-container pt-3'>
      <Card id='AboutMe' className='flex-wrap card card-primary p-3'>
        <h1 className='text-center'>
          'We Stand on the Shoulders of Giants.'
        </h1>
        <hr />

        <div className='row align-items-center'>
          <div className='col-lg-6 p-2'>
            <img
              src='/Profile_Pic.jpg'
              style={imgStyle}
              alt='Portrait of Matthew'
              loading='lazy'
            />
          </div>

          <div className='col-lg-6 p-2'>
            <Container>
<div className="row">
  <h4 className="text-center">Summary</h4>
  <p>
    I am a computer scientist drawn to the "language of structure": linear
    algebra, abstraction, and systems that turn messy reality into something
    we can reason about. My work bridges AI/ML, knowledge representation, and
    production software.
  </p>

  <h5 className="mt-3">Research Direction</h5>
  <p>
    I care most about interpretable intelligence: knowledge graphs, ontologies,
    and hybrid reasoning approaches that connect symbolic structure with
    statistical learning.
  </p>

  <h5 className="mt-3">Engineering</h5>
  <p>
    I translate ideas into artifacts: schemas, APIs, and interfaces that make
    complex systems testable and maintainable. I prefer modular designs with
    explicit contracts.
  </p>

  <h5 className="mt-3">Delivery</h5>
  <p>
    I build for reproducibility. Containerized workflows and automation let me
    iterate quickly while keeping environments consistent across machines.
  </p>

  <h5 className="mt-3">Values</h5>
  <p>
    I prioritize ethics, clarity, and reliability. If a system cannot be
    explained, monitored, and improved, it is not finished.
  </p>
</div>

            </Container>
          </div>
        </div>

        <hr />
      </Card>
    </div>
  );
};

export default AboutMe;
