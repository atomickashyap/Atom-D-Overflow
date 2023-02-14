import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        console.log("check")
        dispatch({type: 'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } 
    catch (error) {
        console.log(error)
    }
}



export const login = (authData, navigate) => async(dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({type: 'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } 
    catch (error) {
        alert("No User Found")
        console.log(error)
    }

}