import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const ModeratorMenu = () => {
  return (
    <>
      <NavLink
        to='add-spot' style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <FingerPrintIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Add Spot</span>
      </NavLink>

      <NavLink
        to='manage-spot' style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <UserPlusIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Manage Spot</span>
      </NavLink>
      {/* <NavLink
        to='manage-users'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <FingerPrintIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Users Info</span>
      </NavLink> */}

      <NavLink
        to='manage-booking' style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <UserPlusIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>Manage Booking</span>
      </NavLink>
      {/* <NavLink
        to='all-review' style={{ textDecoration: 'none' }}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <UserPlusIcon className='w-5 h-5' />

        <span className='mx-4 font-medium'>All Review</span>
      </NavLink> */}
    </>
  )
}

export default ModeratorMenu
