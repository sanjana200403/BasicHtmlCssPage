import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src="https://static.vecteezy.com/system/resources/previews/022/996/345/non_2x/3d-space-rocket-render-with-transparent-background-free-png.png" alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
            <img src="https://i.pinimg.com/236x/54/6b/2d/546b2d4e9bddbcb894fa8e416739339b.jpg" alt="" />
            </div>
            <div className="about-right">
               <div className="about-para">
                <p>As a Full Stack Developer, I've embarked on an exciting journey in the world of web and app development. From honing my skills to contributing to innovative projects, here's a glimpse of my career so far.</p>
                <p>My journey began with a deep passion for coding and a desire to create remarkable digital experiences. I immersed myself in learning various programming languages and exploring the intricacies of web development.</p>
               </div>
               <div className="about-skills">
                <div className="about-skill"><p>
                    HTML & CSS
                    </p>
                    <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill"><p>
                  
                  Javascript
                    </p>
                    <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill"><p>
                  React
                    </p>
                    <hr style={{width:"50%"}} />
                    </div>
                    <div className="about-skill"><p>
                  Node Js / Express
                    </p>
                    <hr style={{width:"50%"}} />
                
                    </div>
                    <div className="about-skill"><p>
                 MONGOdb
                    </p>
                    <hr style={{width:"70%"}} />
                
                    </div>
               </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
               <h1>10+</h1>
               <p>Projects</p>
            </div>
            <hr />
            <div className="about-achievement">
               <h1>MERN Stack</h1>
               <p>Skill</p>
            </div>
            <hr />
            <div className="about-achievement">
               <h1>8+</h1>
               <p>CGPA</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
