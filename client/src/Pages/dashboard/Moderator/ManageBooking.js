import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const ManageBooking = () => {
    const [booking, setBooking] = useState([]);
    const {user} = useContext(AuthContext);


  useEffect( () => {
    fetch(`${process.env.REACT_APP_API_URL}/booking`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setBooking(data);
    })
  }, [user.email]);

  const handleDelete = id => {
    const deleteConfirmation = window.confirm('Are you sure to delete this booking');
    if(deleteConfirmation){
      const url = `${process.env.REACT_APP_API_URL}/delete-booking/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Deleted Successfully');
          const remaining = booking.filter(booking => booking._id !== id);
          setBooking(remaining);
        }
       
      })
    }
   
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
              Title
            </th>
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
              Price
            </th>
            <th
              scope='col'
              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
              Date
            </th>
            <th
              scope='col'
              className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
              Action
            </th>
          </tr>
        </thead>

     {booking.map((booking)=>(
   <tbody>
          <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <div className='flex items-center'>
                {/* <div className='flex-shrink-0'>
                  <div className='block relative'>
                    <img
                      alt='profile'
                      src='https://www.tailwind-kit.com/images/person/6.jpg'
                      className='mx-auto object-cover rounded h-10 w-15 '
                    />
                  </div>
                </div> */}
                <div className='ml-3'>
                  <p className='text-gray-900 whitespace-no-wrap'>
                    {booking.spotName}
                  </p>
                </div>
              </div>
            </td>
             <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <p className='text-gray-900 whitespace-no-wrap'>
              {booking.email}
              </p>
            </td>
       
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <p className='text-gray-900 whitespace-no-wrap'>${booking.cost}</p>
            </td>
                 
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <p className='text-gray-900 whitespace-no-wrap'>
              {booking.dateData}
              </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <p className='text-gray-900 whitespace-no-wrap'>
              {booking.dateData}
              </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
              <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                <span
                  aria-hidden='true'
                  className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                ></span>
                <span className='relative'onClick={() => handleDelete(booking._id)} >Cancel</span>
              </span>
            </td>
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

export default ManageBooking;