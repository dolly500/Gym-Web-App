import React from 'react'
import aboutImage from '../images/about.png';
function About() {
  return (
    <div id ='about'>
        <div className='about-image'>
            <img src={aboutImage} alt=''/>
        </div>

        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi neque blanditiis qui quos doloremque accusantium quaerat nostrum modi sint sequi, assumenda libero vero numquam hic eos exercitationem quod? Amet?</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About