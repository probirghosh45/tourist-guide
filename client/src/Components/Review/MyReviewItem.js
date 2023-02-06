import React, { useState, useEffect } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const MyReviewItem = ({ review, handleDelete }) => {
  const navigate = useNavigate();

  const { sid, serviceName, reviewMessage, _id } = review;
  //   console.log("review",review)
  const [serviceData, setServiceData] = useState({});
  console.log("serviceData", serviceData);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/spot/${sid}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data);
      })
      .catch((err) => console.error(err));
  }, [sid]);

  // const handleEdit = (id) => {
  //   navigate(`/reviews/edit/${id}`);
  // };

  return (
    <tr>
      <td className="px-4 py-3 text-primary font-bold">
        <div className="flex items-center">
          <div className="avatar p-3">
            <div className="mask w-24 h-12 border-4 border-accent">
              <PhotoProvider>
                <PhotoView
                  src={
                    serviceData
                      ? serviceData?.image
                      : `https://i.ibb.co/G9jFD5Q/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`
                  }
                >
                  <img
                    src={
                      serviceData
                        ? serviceData?.image
                        : `https://i.ibb.co/G9jFD5Q/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg`
                    }
                    alt="Spot"
                  ></img>
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
          <Link to={`/booking/${sid}`}>{serviceName}</Link>
        </div>
      </td>
      <td className="px-4 py-3">{reviewMessage}</td>
      <td className="px-4 py-3">
        <div className="my-review-action flex">
          {/* <button
            onClick={() => handleEdit(_id)}
            className="flex items-center py-2 pr-5 text-primary"
          >
            <FaRegEdit /> Edit
          </button> */}
          <button
            onClick={() => handleDelete(_id)}
            className="flex items-center py-2 text-orange-600"
          >
            <FaRegTrashAlt /> Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyReviewItem;
