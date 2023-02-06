import React, { useContext, useEffect, useState } from 'react';
import { getAllUsers, makeModerator } from '../../../API/user';
import SmallSpinner from '../../../Components/Spinner/SmallSpinner';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const ManageUsers = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(false)
//     const {user} = useContext(AuthContext);


//   useEffect( () => {
//     fetch(`${process.env.REACT_APP_API_URL}/user`)
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data);
//       setUsers(data);
//       setLoading(false)
//     })
//   }, [user.email]);

//   const handleDelete = id => {
//     const deleteConfirmation = window.confirm('Are you sure to delete this booking');
//     if(deleteConfirmation){
//       const url = `${process.env.REACT_APP_API_URL}/delete-booking/${id}`;
//       fetch(url, {
//         method: 'DELETE'
//       })
//       .then(res => res.json())
//       .then((data) => {
//         console.log(data)
//         if(data.deletedCount > 0){
//           alert('Deleted Successfully');
//           const remaining = users.filter(user => user._id !== id);
//           setUsers(remaining);
//         }
       
//       })
//     }
   
//   }


const [loading, setLoading] = useState(false)
const [users, setUsers] = useState([])
useEffect(() => {
  getUsers()
}, [])

const handleRequest = user => {
  makeModerator(user).then(data => {
    console.log(data)
    getUsers()
  })
}
const getUsers = () => {
  setLoading(true)
  getAllUsers().then(data => {
    setUsers(data)
    setLoading(false)
  })
}

    return (

<div className='container mx-auto px-4 sm:px-8'>
<div className='py-8'>
  <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
      <table className='min-w-full leading-normal'>
        <thead>
          <tr>
            <th
              scope='col'
              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
              Email
            </th>
            <th
              scope='col'
              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
              Role
            </th>
            <th
              scope='col'
              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
              Action
            </th>
          </tr>
        </thead>

     {users.map((user)=>(
   <tbody>
          <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <div className='flex items-center'>
                <div className='ml-3'>
                  <p className='text-gray-900 whitespace-no-wrap'>
                    {user?.email}
                  </p>
                </div>
              </div>
            </td>      
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <p className='text-gray-900 whitespace-no-wrap'>{user?.role ? user?.role : "user" }</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        {user?.role && user.role === 'requested' && (
                          <span
                            onClick={() => handleRequest(user)}
                            className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                          >
                            <span
                              aria-hidden='true'
                              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                            ></span>
                            <span className='relative'>
                              {loading ? <SmallSpinner /> : ' Approve Request'}
                            </span>
                          </span>
                        )}
                      </td>
            {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                <span
                  aria-hidden='true'
                  className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                ></span>
                <span className='relative'onClick={() => handleDelete(user._id)} >Cancel</span>
              </span>
            </td> */}
          </tr> 
        </tbody> 
     ))}
      
      </table>
    </div>
  </div>
</div>
</div>
    );
};

export default ManageUsers;