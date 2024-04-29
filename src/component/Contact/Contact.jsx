import React from 'react'
import './Contact.css'
import { FaHashnode } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="conatct-title">
            <h1>Get In touch</h1>
            <img src="https://static.vecteezy.com/system/resources/previews/022/996/345/non_2x/3d-space-rocket-render-with-transparent-background-free-png.png" alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>let's talk</h1>
                <p>I am currently available to take on new project, so feel free to connect </p>
                <div className="conatct-details">
                <div className="contact-detail">
           <IoMail/>
                  <p>03sanjana2004@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <FaLinkedin/>
                    <p>https://www.linkedin.com/in/sanjanamaurya/</p>
                    </div>
                    <div className="contact-detail">
                        <FaHashnode/>
                        <p>https://sanjanamaurya.hashnode.dev/</p>
                    
                    </div>
            </div>
            </div>
        
            <form action="" className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name'name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='email' />
                <label htmlFor="">Your message </label>
               <textarea name="" id="" cols="30" rows="10"></textarea>
               <button
               type='submit'
               className="contact-submit">
                     Submit now
               </button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
