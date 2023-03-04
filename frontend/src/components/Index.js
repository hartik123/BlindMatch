import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ChatArea from './ChatArea'
import UserSearch from './UserSearch'
import UsersList from './UsersList'

const Index = () => {

    const [searchKey, setSearchKey]= useState('')
    const {selectedChat} = useSelector((state)=>state.users)
    

  return (
    <div className='flex gap-5'>
        <div className='w-96'>
            <UserSearch  searchKey={searchKey} setSearchKey={setSearchKey}/>
            <UsersList searchKey={searchKey}/>
        </div>
        {selectedChat && <div className='w-full'>
            <ChatArea />
        </div>}
    </div>
  )
}

export default Index