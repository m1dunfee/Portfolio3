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
            <div className="row">

              <div className="col-10">
                <h2>Suggestions?</h2>
                <p className="lead">Looking for a particular proof of concept? Want to see a certain library or framework? Please take a moment to fill out a request, I'd love to hear your two cents!</p>
              </div>

              <div className="col-2" id="jumbotronButton">
                <Button color="primary" onClick={this.toggle}>Feedback</Button> {/* Focus  */}
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
              </div>

            </div>
          </Jumbotron>

        </div>
      </div>
    );
  }
};

export default Feedback;