import React, { useState } from 'react'
import ChatArea from './ChatArea'
import UserSearch from './UserSearch'
import UsersList from './UsersList'

const Index = () => {

    const [searchKey, setSearchKey]= useState('')



  return (
    <div className='d-flex gap-5'>
        <div className='w-25'>
            <UserSearch  searchKey={searchKey} setSearchKey={setSearchKey}/>
            <UsersList searchKey={searchKey}/>
        </div>
        <div>
            <ChatArea />
        </div>
    </div>
  )
}

export default Index