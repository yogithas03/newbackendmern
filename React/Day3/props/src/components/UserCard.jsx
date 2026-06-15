

const UserCard = ({userdetail}) => {
    const {username,email,phone,city}=userdetail;
  return (
    <>
    <h1>Profile</h1>
    <h4>Name:{username}</h4>
    <h4>Email:{email}</h4>
    <h4>Phone:{phone}</h4>
    <h4>City:{city}</h4>




      
    </>
  )
}

export default UserCard
