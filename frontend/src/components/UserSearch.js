import React from 'react'

const UserSearch = ({searchKey, setSearchKey}) => {
  return (
    <div className="relative d-flex gap-2">
        <input type="text" value={searchKey} placeholder='🔍 Search for user/chat' className='w-full rounded-full border-gray-500' onChange={(e)=>setSearchKey(e.target.value)} />
    </div>
  )
}

export default UserSearch