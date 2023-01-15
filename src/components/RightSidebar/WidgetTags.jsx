import React from 'react'
import './RightSidebar.css'

const WidgetTags = () => {

    const tags = ['c','cpp','css','express','firebase','html','java','javascript','mern','mysql','next.js','node.js','php' ,'python','reactjs']

  return (
    <div className='widget-tags'>
      <h3>Watched tags</h3>
      <div className='widget-tags-div'>
      {
        tags.map((tag) =>(
            <p key = {tag}>{tag}</p>
        ))
      }
      </div>
    </div>
  )
}

export default WidgetTags
