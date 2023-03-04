import React from 'react'
import {useSelector} from 'react-redux'

const UsersList = ({searchKey}) => {

  const {allUsers} = useSelector(state=>state.users)

  // let allUserWithFilter = allUsers.filter()

  return (
    <div className='d-flex flex-col gap-2 mt-4'>
      {
        
      allUsers.filter((user)=>{return user.name.toLowerCase().includes(searchKey.toLowerCase()) }).map((userObj)=>{

        return(
          <div className='shadow border p-4'>
            <div className='d-flex gap-3'>
              {userObj.image!=='' && <img src={userObj.image} alt="profilepic" className='rounded-full' style={{width:"40px", height:"40px"}} />}

              {userObj.image === '' && <div className='bg-gray-500 \ rounded-full' style={{width:"40px", height:"40px", justifyContent:"center", alignItems:"center", display:"flex"}}><h1 className='upper-case text-2xl font-semibold text-white'>{userObj.name[0]}</h1></div>}
              <div className='mt-2'>
              {userObj.name}
              </div>
            </div>
          </div>
        )
      })
    }
        </div>
  )
}

export default UsersList