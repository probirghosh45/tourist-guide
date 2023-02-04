export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  // save user data in db and get token
  fetch(`${process.env.REACT_APP_API_URL}/user/${currentUser.email}`, {
    method: "PUT",
    body: JSON.stringify(currentUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("tourist-guide", data.token);
    });
};
