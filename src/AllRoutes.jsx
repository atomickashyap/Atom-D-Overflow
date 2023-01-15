import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Questions from './pages/Questions/Questions';

const AllRoutes = () =>{
    return(
            <Routes>
                <Route exact path='/auth' element =  {<Auth />} />
                <Route path = '/questions' element={<Questions />}/>
                <Route path='/' element = {<Home />} />
                
            </Routes>
    )
}


export default AllRoutes