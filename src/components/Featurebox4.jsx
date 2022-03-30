import React from 'react';

function Featurebox4(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Cardio Exercise any type of exercise that gets your heart rate up and keeps it up for a prolonged period of time.</p>
        </div>
    </div>
  )
}

export default Featurebox4