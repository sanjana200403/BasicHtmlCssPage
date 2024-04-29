import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src="https://i.pinimg.com/236x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg" alt="" />
      <h1>
        <span>

        I am Sanjana maurya,
        
        </span>
        MERN Stack developer
         </h1>
      <p>I am MERN STACK developer,Currently pursuing b.tech in cs branch from ssvgi</p>
      <div className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <div className="hero-resume"> resume</div>
      </div>
    </div>
  )
}

export default Hero
