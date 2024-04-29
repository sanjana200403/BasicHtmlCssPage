import React from 'react'
import './MyWork.css'
import { FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest work</h1>
            <img src="https://static.vecteezy.com/system/resources/previews/022/996/345/non_2x/3d-space-rocket-render-with-transparent-background-free-png.png" alt="" />
        </div>
        <div className="mywork-container">
             <img src="https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png" alt="" />
             <img src="https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png" alt="" />
             <img src="https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png" alt="" />
             <img src="https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png" alt="" />
             <img src="https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png" alt="" />
             <img src="https://s3-alpha.figma.com/hub/file/1803556575/dddad4ab-afbe-4c4b-bfbd-5f872db64b12-cover.png" alt="" />
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <FaArrowRight/>
            </div>
      
    </div>
  )
}

export default MyWork
