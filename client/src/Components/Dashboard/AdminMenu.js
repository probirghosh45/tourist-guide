import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
      <NavLink
        to='add-division' style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <FingerPrintIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Add Division</span>
      </NavLink>

      <NavLink style={{ textDecoration: 'none' }}
        to='manage-division'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <UserPlusIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Manage Division</span>
      </NavLink>
      <NavLink
        to='manage-users' style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <UserPlusIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Manage Users</span>
      </NavLink>
      {/* <NavLink
        to='manage-moderator'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <UserPlusIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>All Moderator</span>
      </NavLink> */}
      <NavLink style={{ textDecoration: 'none' }}
        to='report'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <UserPlusIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Report</span>
      </NavLink>
      
    </>
  )
}

export default AdminMenu
