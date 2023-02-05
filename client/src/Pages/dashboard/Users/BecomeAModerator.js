import React, { useContext, useEffect, useState } from 'react'
import BecomeModeratorForm from '../../../Components/Form/BecomeModeratorForm'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider'


const BecomeAModerator = () => {
  const { user } = useContext(AuthContext)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)


  const handleSubmit = event => {

  }

  return (
    <>
      
        {/* <div className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
          Request Sent, wait for admin approval
        </div> */}
      
        {/* {!loading && <BecomeModeratorForm handleSubmit={handleSubmit} />} */}
        <BecomeModeratorForm/>
    
    </>
  )
}

export default BecomeAModerator;
