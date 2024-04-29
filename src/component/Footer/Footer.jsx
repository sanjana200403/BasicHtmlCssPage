import React from 'react'
import './Footer.css'
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
       <div className="footer-top">
        <div className="footer-top-left">
            <img src="https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-s-logo-icon-vector-png-image_7111071.png" alt="" />
            <p>I am Frontend Developer </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
          <FaUser/>
            <input type="email" placeholder='Enter your emails' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
         
        </div>
     
        
        </div> 
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>
                &copy; 2024 sanjana maurya. All right reserved
            </p>
            <div className="footer-botton-right">
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
