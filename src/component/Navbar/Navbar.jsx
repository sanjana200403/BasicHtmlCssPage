import React, { useRef, useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  const [menu,setMenu] = useState("home")
  const menuRef = useRef();
  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
      <img
      height={"50px"}
      src="https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-s-logo-icon-vector-png-image_7111071.png" alt="" />
      <img 
      onClick={openMenu}
      className='nav-mob-open'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSOEJF9ls_J7uihfx_YwsynomAZ7Dx764-uS4LhpbkA&s" alt="" />
      <ul className='nav-menu'
      ref={menuRef}
      >
        <img 
        onClick={closeMenu}
        className='nav-mob-close'
        src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt="" />
        <li><AnchorLink className="anchor-link" href="#hero">
         <p onClick={()=> setMenu("home")} > Home </p></AnchorLink>{menu==="home"? <div style={{
          borderRadius:"50%",
          backgroundColor:"pink" ,
          height:"10px",width:"10px",background:"white"}}></div> :<></> }</li>
        <li> <AnchorLink className="anchor-link" href="#about">
          <p onClick={()=> setMenu("about")}> About Me</p>
          </AnchorLink> {menu==="about"? <div style={{
          borderRadius:"50%",
          backgroundColor:"pink" ,
          height:"10px",width:"10px",background:"white"}}></div>:<></> } </li>
        <li><AnchorLink className="anchor-link" href='#services'> <p onClick={()=> setMenu("services")}>  Services </p>
        </AnchorLink>{menu==="services"? <div style={{
          borderRadius:"50%",
          backgroundColor:"pink" ,
          height:"10px",width:"10px",background:"white"}}></div>:<></> }</li>
        <li> <AnchorLink className="anchor-link" href='#work'>
           <p onClick={()=> setMenu("work")}>  Projects </p>
           </AnchorLink>
           {menu==="work"? <div style={{
          borderRadius:"50%",
          backgroundColor:"pink" ,
          height:"10px",width:"10px",background:"white"}}></div>:<></> }</li>
        <li> <AnchorLink className="anchor-link" href='#contact'> <p onClick={()=> setMenu("contact")}> Contact </p></AnchorLink>
        {menu==="contact"? <div style={{
          borderRadius:"50%",
          backgroundColor:"pink" ,
          height:"10px",width:"10px",background:"white"}}></div>:<></> } </li>
      </ul>
      <div className="nav-connect">
      <button>Connect</button>
      </div>
    </div>
  )
}

export default Navbar
