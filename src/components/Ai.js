import React, { Component } from 'react';
import { Card} from 'reactstrap';



class Ai extends Component {
    render() {
        return (
            <div className='card-container'>
            <Card className='flex-wrap card card-primary '>
              
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
          </div>
        )
    }
}

export default Ai;