// Get user role
export const getRole = async email => {
    const url = `${process.env.REACT_APP_API_URL}/user/${email}`
  
    const response = await fetch(url)
  
    const user = await response.json()
  
    return user?.role

}