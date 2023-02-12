import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import AskQuestions from './pages/AskQuestions/AskQuestions';
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users';
import UserProfile from './pages/UserProfile/UserProfile';


const AllRoutes = () =>{
    return(
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route exact path='/auth' element =  {<Auth />} />
                <Route path='/AskQuestions' element = {<AskQuestions />} />
                <Route path = '/questions' element={<Questions />}/>
                <Route path = '/questions/:id' element={<DisplayQuestion />}/>
                <Route path = '/Tags' element={<Tags />}/>
                <Route path = '/Users' element={<Users />}/>
                <Route path = '/Users/:id' element={<UserProfile />}/>
                
                
                
            </Routes>
    )
}


export default AllRoutes