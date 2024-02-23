import './closefrd.css'

const Closefrd = ({user}) => {
  return (
    <li className="sidebarfrds">
    <img className='frdsimg' src={user.profilePicture} alt="" />
    <span className="frdsname">{user.username}</span>
  </li>
  )
}

export default Closefrd