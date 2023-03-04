import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { createNewChat } from '../apicalls/chats'
import { message } from 'antd'
import { HideLoading, ShowLoading } from '../redux/loadersSlice'
import { SetAllChats, SetSelectedChat } from '../redux/usersSlice'
import moment  from 'moment'

const UsersList = ({searchKey}) => {

  const {allUsers,allChats,user, selectedChat} = useSelector(state=>state.users)
  const dispatch = useDispatch();
  // let allUserWithFilter = allUsers.filter()
  const createNewChatApi = async(recipientUserId) => {
    try{
      dispatch(ShowLoading())
      const response = await createNewChat([user._id,recipientUserId])
      dispatch(HideLoading())
      if(response.success){
         message.success(response.message)
         const newChat = response.data;
         const updatedChats = [...allChats, newChat];
         dispatch(SetAllChats(updatedChats))
         dispatch(SetSelectedChat(newChat))
      }
      else{
        message.error(response.message)
      }
    }
    catch(error){
      dispatch(HideLoading())
      message.error(error.message)
    }
  }
  
  const openChat = (recipientUserId) => {
    const chat = allChats.find((chat)=>chat.members.map((mem)=>mem._id).includes(user._id)&&chat.members.map((mem)=>mem._id).includes(recipientUserId))
    if(chat){
      dispatch(SetSelectedChat(chat));
    }
  }

  const getData = () => {
     return allUsers.filter((userObj,index)=>(userObj.name.toLowerCase().includes(searchKey.toLowerCase()) && searchKey) || (allChats.some((chat)=>chat.members.map((mem)=>mem._id).includes(userObj._id))))
  }

  const getIsSelectedChatOrNot = (userObj) => {
    if(selectedChat){
      return selectedChat.members.map((mem)=>mem._id).includes(userObj._id)
    }
    return false
  }

  const getDateInRegualarFormat = (date) => {
    let result = "";

    // if date is today return time in hh:mm format
    if (moment(date).isSame(moment(), "day")) {
      result = moment(date).format("hh:mm A");
    }
    // if date is yesterday return yesterday and time in hh:mm format
    else if (moment(date).isSame(moment().subtract(1, "day"), "day")) {
      result = `Yesterday ${moment(date).format("hh:mm A")}`;
    }
    // if date is this year return date and time in MMM DD hh:mm format
    else if (moment(date).isSame(moment(), "year")) {
      result = moment(date).format("MMM DD hh:mm A");
    }

    return result;
  };

  const getLastMsg = (userObj) => {
    const chat = allChats.find((chat) =>
      chat.members.map((mem) => mem._id).includes(userObj._id)
    );
    if (!chat || !chat.lastMessage) {
      return "";
    } else {
      const lastMsgPerson =
        chat?.lastMessage?.sender === user._id ? "You : " : "";
      return (
        <div className="flex justify-between w-64">
          <h1 className="text-gray-600 text-sm">
            {lastMsgPerson} {chat?.lastMessage?.text}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {getDateInRegualarFormat(chat?.lastMessage?.createdAt)}
          </h1>
        </div>
      );
    }
  };

  return (
    <div className='flex flex-col gap-3 mt-5 lg:w-96 xl:w-96 md:w-60 sm:w-60'>
      {
        
      getData().map((userObj,index)=>{

        return(
          <div className={`shadow-sm border p-2 rounded-xl bg-white flex justify-between items-center cursor-pointer w-full ${getIsSelectedChatOrNot(userObj)&&"border-primary border-2"}`} key={userObj._id} onClick={()=>openChat(userObj._id)}>
            <div className='flex gap-5 items-center'>
              {userObj.image!=='' && <img src={userObj.image} alt="profilepic" className="w-10 h-10 rounded-full"/>}

              {userObj.image === '' && <div className="bg-gray-400 rounded-full h-12 w-12 flex items-center justify-center relative"><h1 className="uppercase text-xl font-semibold text-white">{userObj.name[0]}</h1></div>}
              <div className='flex flex-col gap-1'>
              <div>{userObj.name}</div>
              {getLastMsg(userObj)}
              </div>
            </div>
            <div
             onClick={()=>createNewChatApi(userObj._id)}
            >
              {!allChats.find((chat)=>chat.members.map((mem)=>mem._id).includes(userObj._id))&&(
                <button className="border-primary border text-primary bg-white p-1 rounded">
                  Create Chat
                </button>
              )}
            </div>
          </div>
        )
      })
    }
        </div>
  )
}

export default UsersList