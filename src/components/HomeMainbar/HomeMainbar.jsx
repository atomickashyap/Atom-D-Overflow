import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  var questionsList = [{
    id:1,
    votes:3,
    noOfAnswer:2,
    questionTitle:"What is a 1 function?",
    questionBody:"It meant to be",
    questionTags:["java","node js","react js","mongo db"],
    userPosted:"mano",
    askedOn:"jan 1"
  },{
    id:2,
    votes:0,
    noOfAnswer:0,
    questionTitle:"What is a 2 function?",
    questionBody:"It meant to be",
    questionTags:["python","R","javascript"],
    userPosted:"mano",
    askedOn:"jan 1"
  },{
    id:3,
    votes:1,
    noOfAnswer:0,
    questionTitle:"What is a 3 function?",
    questionBody:"It meant to be",
    questionTags:["python","R","javascript"],
    userPosted:"mano",
    askedOn:"jan 1"
  }
]

  const location = useLocation()
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> :<h1>All Questions</h1>
        }
        <Link to ='/AskQuestion' className='ask-btn'>Ask Question</Link>
      </div>
      <div >
        {
          questionsList === null ?
          <h1>Loading....</h1>:
          <>
            <p>{ questionsList.length } questions</p>
            <QuestionList questionsList = {questionsList}/>
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
