import React, { Component } from 'react';
import { Card} from 'reactstrap';



class Ai extends Component {
    render() {
        return (
            <div className='card-container'>
            <Card className='flex-wrap card card-primary text-center'>
              
              <h4 className=''>Artificial Intelligence</h4>
              <h3 className='quote'>We stand of the shoulders of giants. - Isaac Newton</h3>
              <hr/>
              <p>
                  llms linguistic relativity
                  machine learning = abstraction of data
              </p>
              <hr/>

            </Card>
          </div>
        )
    }
}

export default Ai;