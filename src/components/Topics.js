import React, { Component } from 'react';
import { Card} from 'reactstrap';



class Topics extends Component {
    render() {
        return (
            <div className='card-container'>
            <Card className='flex-wrap card card-primary text-center'>
              
              <h1 className=''>Topics of interest</h1>
              <h4 className='quote'>To understand life, we must first understnad the code that writes it. - Richard Feynman</h4>
              <hr/>
              <p>
                  
              </p>
              <hr/>

            </Card>
          </div>
        )
    }
}

export default Topics;