import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { userInfo } from '../apicalls/users';

const ProtectedRoute = ({children}) => {

    const [user, setUser] = useState({})
    const [toastText, setToastText] = useState('')
    const navigate = useNavigate()


    const getData =async() =>{
        try{
            const response = await userInfo()
            if(response.success){
                setUser(response.data)
                setToastText(response.message)
            }
            else{
                setToastText(response.message)
                navigate('/login')
            }
        }
        catch(err){
            setToastText(err.message)
            navigate('/login')
        }
    }


    useEffect(()=>{
        if(localStorage.getItem('token')){
            if(!user){
                getData()
            }
        }
        else{
            navigate('/')
        }
    })

  return (
    user && <div>{children}</div>
  )
}

export default ProtectedRoute