import React from 'react'
import Featurebox from './Featurebox';
import Featurebox1 from './Featurebox1';
import Featurebox2 from './Featurebox2';
import Featurebox4 from './Featurebox4';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';




function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="WEIGHTLIFTING"/>
            <Featurebox1 image={fimage2} title="SPECIFIC MUSCLES"/>
            <Featurebox2 image={fimage3} title="FLEX YOUR MUSCLE"/>
            <Featurebox4 image={fimage4} title="CARDIO EXERCISE"/>
        </div>
    </div>
  )
}

export default Feature;