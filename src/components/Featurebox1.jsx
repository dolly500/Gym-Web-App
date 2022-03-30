import React from 'react';

function Featurebox1(props) {
  return (
    <div className='a-box'>
        <div class='a-b-img'>
            <img src={props.image} alt=''/>
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Specific Muscle will make you grow more muscle and exercise will always make you fit.</p>
        </div>
    </div>
  )
}

export default Featurebox1