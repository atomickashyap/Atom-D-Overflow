import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import AskQuestions from './pages/AskQuestions/AskQuestions';
import Tags from './pages/Tags/Tags'


const AllRoutes = () =>{
    return(
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route exact path='/auth' element =  {<Auth />} />
                <Route path = '/questions' element={<Questions />}/>
                <Route path='/AskQuestions' element = {<AskQuestions />} />
                <Route path = '/questions/:id' element={<DisplayQuestion/>}/>
                <Route path = '/Tags' element={<Tags/>}/>
                
                
                
            </Routes>
    )
}


export default AllRoutes