import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getAllUsers, userInfo } from '../apicalls/users';
import { message } from 'antd';
import { SetUser, ReloadUser, SetAllUsers, SetAllChats } from '../redux/usersSlice';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import { getAllChatsByUser } from '../apicalls/chats';


const ProtectedRoute = ({children}) => {

    // const [user, setUser] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user,reloadUser} = useSelector((state)=>state.users)
    const getData =async() =>{
        try{
            dispatch(ShowLoading())
            const response = await userInfo()
            const allUsersResponses = await getAllUsers()
            const allChatsResponses = await getAllChatsByUser()
            dispatch(HideLoading())

            if(response.success){
                dispatch(SetUser(response.data));
                dispatch(SetAllUsers(allUsersResponses.data))
                dispatch(SetAllChats(allChatsResponses.data))
                message.success(response.message);
            }
            else{
                message.error(response.message)
                navigate('/login')
            }
            dispatch(ReloadUser(false))
        }
        catch(err){
            dispatch(HideLoading())
            message.error(err.message)
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

    useEffect(()=>{
        if(reloadUser){
         getData()
        }
     })

  return (
    user && <div>{children}</div>
  )
}

export default ProtectedRoute