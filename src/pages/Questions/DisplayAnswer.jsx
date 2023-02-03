import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Avatar from '../../components/Avatar/Avatar'
import './Questions.css'



const DisplayAnswer = ({question,handleShare}) => {
  return (
    <div>
      {
        question.answer.map((ans) => (
            <div className="display-ans" key = {ans._id}>
                <p>{ans.answerBody}</p>
                <div className="question-actions-user">
                    <div>
                        <button type = "button"  onClick = {handleShare}>Share</button>
                        <button type = "button">Delete</button>
                    </div>
                    <div>
                        <p>answered {moment(ans.answeredOn).fromNow()}</p>
                        <Link to ={`/User/${question.userId}`} className='user-link' sytle={{color:'#0086d8'}} > 
                            <Avatar backgroundColor="green" px = '8px' py ='5px' >{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                            <div>
                                {ans.userAnswered}
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayAnswer
