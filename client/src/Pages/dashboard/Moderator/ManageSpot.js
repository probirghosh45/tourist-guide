import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../shared/Loading";

const ManageSpot = () => {
  useTitle("Manage Spot");
  const { user } = useContext(AuthContext);

  const { data: spot, isLoading } = useQuery({
    queryKey: ["spots"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/manage-spot?email=${user?.email}`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  //   const {
  //     divisionData : division,
  //     loadingData,
  //   } = useQuery({
  //     queryKey: ["divisions"],
  //     queryFn: async () => {
  //       try {
  //         const res = await fetch(
  //           `${process.env.REACT_APP_API_URL}/division`,
  //         );
  //         const divisionData = await res.json();
  //         // console.log("data", divisionData);
  //         return divisionData;
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //   });

  if (isLoading) {
    return <Loading />;
  }

  //   if (loadingData) {
  //     return <Loading />;
  //   }

  return (
    <div className="overflow-x-auto">
      <h2 className="text-center py-5">Manage Spot</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Photo</th>
            <th>Spot Name</th>
            <th>Duration</th>
            <th>Cost</th>
            {/* <th>District & Division</th> */}
            <th>District</th>
            <th>Info Update</th>
            <th>Delate Spot</th>
          </tr>
        </thead>
        <tbody>
          {spot.map((spot, i) => (
            <tr key={spot?._id}>
              <td>{i + 1}</td>
              <td>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={spot?.image} alt="" />
                  </div>
                </div>
              </td>
              <td>{spot?.spotName}</td>
              <td>{spot?.duration}</td>
              <td>{spot?.cost}</td>
              {/* <td>{spot?.district} , {division?.name}</td> */}
              <td>{spot?.district}</td>
              <td>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Info Update
                </button>
              </td>
              <td>
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Delate Spot
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSpot;
