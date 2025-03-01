import React, { Component } from 'react';
import { Card} from 'reactstrap';



class Gamedev extends Component {
    render() {
        return (
            <div className='card-container'>
            <Card className='flex-wrap card card-primary text-center'>
              
              <h1 className=''>Game Development</h1>
              <h3 className='quote'>We stand of the shoulders of giants. - Isaac Newton</h3>
              <hr/>
              
              <hr/>

            </Card>
          </div>
        )
    }
}

export default Gamedev;