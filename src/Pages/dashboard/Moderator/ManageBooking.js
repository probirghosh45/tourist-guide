import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const ManageBooking = () => {
    const [booking, setBooking] = useState([]);
    const {user} = useContext(AuthContext);


  useEffect( () => {
    fetch(`http://localhost:5000/booking`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setBooking(data);
    })
  }, [user.email]);

  const handleDelete = id => {
    const deleteConfirmation = window.confirm('Are you sure to delete this booking');
    if(deleteConfirmation){
      const url = `http://localhost:5000/delete-booking/${id}`;
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
        <div>
        <h2 className='text-center py-5'>Manage Booking</h2>
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

export default ManageBooking;