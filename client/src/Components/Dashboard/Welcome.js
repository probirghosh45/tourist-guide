import React, { useContext, useEffect, useState } from 'react'
import { getRole } from '../../API/user';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider'

const Welcome = () => {
  const { user } = useContext(AuthContext)
  const [role, setRole] = useState(null);
  console.log("role",role)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return (
    <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
      <div className='flex justify-center items-center'>
        <p className='text-6xl font-bold'>Welc</p>
        <div className='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
        <p className='text-6xl font-bold mr-2'>me</p>
        <p className='text-6xl font-bold'>To</p>
      </div>
      <div className='flex justify-center text-gray-500 items-center mt-4'>
      {!loading && role ? (
          <>
            {role === 'admin' ? (
              <p className='text-3xl font-medium'>Admin Dashboard</p>
            ) : (
              <p className='text-3xl font-medium'>Moderator Dashboard</p>
            )}
          </>
        ) : (
          <p className='text-3xl font-medium'>User Dashboard</p>
        )}      </div>
    </div>
  )
}

export default Welcome