import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen from '../../assets/pen.svg'
import blackLogo from '../../assets/blackLogo.svg'

const Widget = () => {
  return (
    <div className = 'widget'>
        <h4>The Atom-D Overflow</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt = "open" width = '18'/>
                <p>Observability is key to the future of software (and your DevOps career)</p>
            </div> 
            <div className='right-sidebar-div-2'>
            <img src={pen} alt = "open" width = '18'/>
            <p>Podcast 374: How valuable is your screen name?</p>
        </div>   
        </div>
    </div>
  )
}

export default Widget
