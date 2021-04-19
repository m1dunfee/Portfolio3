import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class Services extends Component {
  render() {
    return (
      <div>
        <div className="text-center">3%</div>
        <Progress value="3" />
        <div className="text-center">25%</div>
        <Progress value="25" />
        <div className="text-center">50%</div>
        <Progress value={50} />
        <div className="text-center">75%</div>
        <Progress value={75} />
        <div className="text-center">100%</div>
        <Progress value="100" />
      </div>
    )
  }
}

export default Services;