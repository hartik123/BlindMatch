import React from 'react'

const UserSearch = ({searchKey, setSearchKey}) => {
  return (
    <div className="relative">
        <input type="text" value={searchKey} placeholder='Search for user/chat' className='rounded-xl w-full border-gray-300 pl-10 text-gray-500 h-14"' onChange={(e)=>setSearchKey(e.target.value)} />
        <i className="ri-search-line absolute top-2 left-4 text-gray-500"></i>
    </div>
  )
}

export default UserSearch