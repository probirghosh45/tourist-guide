import React, { useContext, useEffect, useState } from "react";
import { getImageUrl } from "../../../API/imageUpload";
import { getRole, moderatorRequest } from "../../../API/user";
import BecomeModeratorForm from "../../../Components/Form/BecomeModeratorForm";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BecomeAModerator = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  console.log("role: ",role)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getRole(user?.email).then((data) => {
      console.log("data", data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageUrl(image).then((data) => {
      console.log(data);
      const moderatorData = {
        location: location,
        documentImg: data,
        role: "requested",
        email: user?.email,
      };

      moderatorRequest(moderatorData).then((data) => console.log(data));
    });
  };

  return (
    <>
      {role ? (
        <div className="h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
          Request Sent, wait for admin approval
        </div>
      ) : (
        <>{!loading && <BecomeModeratorForm handleSubmit={handleSubmit} />}</>
      )}
      {/* <BecomeModeratorForm handleSubmit={handleSubmit} /> */}
    </>
  );
};

export default BecomeAModerator;
