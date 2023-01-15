import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg' 
import pen from '../../assets/pen.svg'
import blackLogo from '../../assets/blackLogo.svg'

const Widget = () => {
  return (
    <div className = 'widget'>
        <h4>The Atom-D Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt = "open" width = '18'/>
                <p>Stack Gives Back 2022!</p>
            </div> 
            <div className='right-sidebar-div-2'>
            <img src={pen} alt = "open" width = '18'/>
            <p>Commit to something big: all about monorepos (Ep. 527)</p>
            </div>   
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt = "open" width = '18'/>
                <p>2022 Community-a-thon Recap</p>
            </div> 
            <div className='right-sidebar-div-2'>
            <img src={blackLogo} alt = "open" width = '18'/>
            <p>Temporary policy: ChatGPT is banned</p>
            </div>
            <div className='right-sidebar-div-2'>
            <img src={blackLogo} alt = "open" width = '18'/>
            <p>The [shipping] tag is being burninated</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>34</p>
                <p>Why was this spam flag declined, yet <br/> the question marked as spam? </p>
            </div> 
            <div className='right-sidebar-div-2'>
                <p>45</p>
                <p>What is the best course of action when <br/>a user has high enough rep to..</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>69</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
    </div>
    
  )
}

export default Widget
