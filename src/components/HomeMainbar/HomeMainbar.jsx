import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const user=1;
  const navigate = useNavigate()

  var questionsList = [{
    _id:1,
    upVotes:3,
    downVote:2,
    votes:3, //This should be deleted 
    noOfAnswer:2,
    questionTitle:"What is a 1 function?",
    questionBody:"It meant to be",
    questionTags:["java","node js","react js","mongo db","cpp","html"],
    userPosted:"mano",
    userId: 1,
    askedOn:"jan 1",
    answer:[{
      answerBody: "Answer",
      userAnswered:'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  },{
    _id:2,
    upVotes:3,
    downVote:2,
    votes:0,//This should be deleted 
    noOfAnswer:0,
    questionTitle:"What is a 2 function?",
    questionBody:"It meant to be",
    questionTags:["python","R","javascript"],
    userPosted:"mano",
    userId: 1,
    askedOn:"jan 1",
    answer:[{
      answerBody: "Answer",
      userAnswered:'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  },{
    _id:3,
    upVotes:3,
    downVote:2,
    votes:1,//This should be deleted 
    noOfAnswer:0,
    questionTitle:"What is a 3 function?",
    questionBody:"It meant to be",
    questionTags:["python","R","javascript"],
    userPosted:"mano",
    userId: 1,
    askedOn:"jan 1",
    answer:[{
      answerBody: "Answer",
      userAnswered:'kumar',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }
]


const checkAuth = () => {
  if(user!==1)
  {
    alert("login or signup to ask a question")
    navigate('/Auth')
  }
  else
  {
    navigate('/AskQuestions')
  }
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> :<h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div R>
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