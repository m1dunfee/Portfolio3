import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class Services extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <h4>Five years in the making</h4>
            <p>
            I took my first computer science course in 2016. In 2019, I completed my Certificate in Fullstack Software Engineering. 2020 I learned advanced programming concepts through the overhaul of application, replacing legacy code with modern libraries and frameworks.            
            </p>
          </div>
          <div className="col-8">
            <div id='Services'>
              <div className="text-center"> Three years of Javascript</div>
              <Progress value="66" />
              <div className="text-center"> One years of Java</div>
              <Progress value="20" />
              <div className="text-center"> One year C/C++</div>
              <Progress value="20" />
              <div className="text-center"> Six months Python</div>
              <Progress value="10" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;