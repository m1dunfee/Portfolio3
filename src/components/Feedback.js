import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Jumbotron } from 'reactstrap';

class Feedback extends Component {
  state = {
    modal: false,
  }

  toggle = () => this.setState({...this.state, modal: !this.state.modal});

  render() {
    return (
      <div id='Feedback' className=''>
        <div>

          <Jumbotron>
            <h2>Hello, world!</h2>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary" onClick={this.toggle}>taco</Button> {/* Focus  */}

              <Modal isOpen={this.state.modal} toggle={this.toggle} className="">
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>

            </p>
          </Jumbotron>

        </div>
      </div>
    );
  }
};

export default Feedback;