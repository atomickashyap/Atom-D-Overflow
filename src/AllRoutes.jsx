import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

const AllRoutes = () =>{
    return(
            <Routes>
                <Route exact path='/auth' element =  {<Auth />} />
                <Route path='/' element = {<Home />} />
            </Routes>
    )
}


export default AllRoutes