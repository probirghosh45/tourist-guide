import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import MyReviewItem from '../../../Components/Review/MyReviewItem';

const MyReviews = () => {

   useTitle('My Review')

  const [myReviews, setMyReviews] = useState([])
  const [refresh, setRefresh] = useState(false)

  const { user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/reviews/?reviewerMail=${user?.email}`, {
    })
      .then(res => res.json())
      .then(data => {
        setMyReviews(data)
      })
      .catch(err => console.error(err))

  }, [user?.email, refresh])

  // Action Delete
  const handleDelete = id => {

    // sending the data to server
    fetch(`${process.env.REACT_APP_API_URL}/reviews/${id}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json',
      },

    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete", data)
        if (data.acknowledged) {
          toast.success('Review Deleted')
        }
        setRefresh(!refresh)
      })
  }


  return (
    <>

      <section className="tbl-btm-line text-gray-600 body-font">
        <div className="container px-5 py-15 mx-auto">
          <div className="w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100 rounded-tl rounded-bl">Service Name</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Your Review</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-lg bg-gray-100">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  myReviews.length
                    ?
                    myReviews.map(review =>

                      <MyReviewItem key={review?._id} review={review} handleDelete={handleDelete} />

                    )
                    :
                    <tr>
                      <td colSpan="4">
                        <div className="text-center py-20 text-xl">You Dont add any review yet.. 😟 Please <Link to="/services" style={{ textDecoration: 'none' }} className='text-primary'>Add</Link>
                        </div>
                      </td>
                    </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </>
  )
}

export default MyReviews