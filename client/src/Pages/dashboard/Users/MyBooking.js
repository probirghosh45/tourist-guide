import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../shared/Loading';


const MyBooking = () => {
    
     useTitle("My Booking");
  // const [booking, setBooking] = useState([]);
    const {user} = useContext(AuthContext);
    

  const {data : booking  ,isLoading} = useQuery({
     queryKey : ["myBooking"],
     queryFn :async ()=>{
      try{
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/my-booking/${user.email}`
        );
        const data = await res.json();
        return data;
      }
       catch (err) {
       console.error(err);
      }
  }
});

 if(isLoading){
  return <Loading/>
 }

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
        // if(data.deletedCount > 0){
        //   alert('Deleted Successfully');
        //   const remaining = booking.filter(booking => booking._id !== id);
        //   setBooking(remaining);
        // }
       
      })
    }
   
  }

    return (
        <div>
        <h2 className='text-center py-5'>My Booking</h2>
        <Table striped bordered hover variant="dark">
        <thead>
<tr>
  <th>SL No.</th>
  <th>Title</th>
  <th>User Name</th>
  <th>User Email</th>
  <th>Date</th>
  <th>Address</th>
  <th>Phone Number</th>
  <th>Price</th>
  <th>Action</th>
</tr>
</thead>

{booking.map((booking, index) => (
 <tbody>
 <tr>
   <td>{index+1}</td>
   <td>{booking.spotName}</td>
   <td>{booking.name}</td>
   <td>{booking.email}</td>
   <td>{booking.dateData}</td>
   <td>{booking.addressData}</td>
   <td>{booking.phoneNumber}</td>
   <td>{booking.cost}</td>
   <button onClick={() => handleDelete(booking._id)}>Delete</button>
 </tr>
</tbody>
)

)}

</Table>
    </div>
    );
};

export default MyBooking;