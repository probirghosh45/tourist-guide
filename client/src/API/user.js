
// moderator Request
export const moderatorRequest = async moderatorData => {
    // console.log(moderatorData)
    const url = `${process.env.REACT_APP_API_URL}/user/${moderatorData?.email}`
  
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(moderatorData),
    })
  
    const data = await response.json()
  
    return data
  }


// Get user role
export const getRole = async email => {
    console.log("email", email);
    const url = `${process.env.REACT_APP_API_URL}/user/${email}`
  
    const response = await fetch(url)
  
    const user = await response.json()
  
    return user?.role

}