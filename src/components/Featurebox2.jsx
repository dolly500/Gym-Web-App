import React from 'react';

function Featurebox2(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Flexing your Mucle Everyday will make you look good in your fitness.</p>
        </div>
    </div>
  )
}

export default Featurebox2