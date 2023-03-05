import React from 'react'

const UserSearch = ({searchKey, setSearchKey}) => {
  return (
    <div className="relative mt-5">
        <input type="text" value={searchKey} placeholder='Search for user/chat' className='rounded-xl w-full border-gray-300 pl-10 text-gray-500 h-14"' onChange={(e)=>setSearchKey(e.target.value)} />
        <i className="ri-search-line absolute top-2 left-4 text-gray-500"></i>
        {/* <select className='flex w-full mt-4 rounded-2xl p-2 border-2' onChange={(e)=>setFilter(e.target.value)}>
          <option value="all" selected>All</option>
          <option value="location">Location</option>
          <option value="interest">Interest</option>
        </select> */}
    </div>
  )
}

export default UserSearch