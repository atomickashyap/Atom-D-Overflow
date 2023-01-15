import React from 'react'
import {Link} from 'react-router-dom'

const Questions = ({question}) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
        <p>{question.votes}</p>
        <p>votes</p>
      </div>
      <div className='display-votes-ans'>
        <p>{question.noOfAnswer}</p>
        <p>answers</p>
      </div>
      <div className = "divdisplay-question-details">
        <Link to = {`/Questions/${question.id}`} className = 'question-title-link'>{question.questionTitle}</Link>
        <div className='display-tags-times'>
            <div className='display-tags'>
                {
                    question.questionTags.map((tag) => (
                        <p key = {tag}>{tag}</p>
                    ))
                }
            </div>
            <p className='display-time'>
                asked{question.askedOn } { question.userPosted } 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Questions
