import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imageUrl, name, role} = userDetails
  return (
    <li className="user-profile-container">
      <img src={imageUrl} alt="avatar" className="image" />
      <div className="text-container">
        <h1 className="name">{name}</h1>
        <p className="role">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
