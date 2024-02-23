import "./topbar.css"
import { Search,Person,Chat,Notifications, } from "@mui/icons-material"
import { Link } from "react-router-dom"
const Topbar = () => {
  return (
    <div className="topbarContainer">
<div className="topbarLeft">
  <span className="logo">lamasocial</span>
</div>
<div className="topbarCenter">
  <div className="searchbar">
    <Search className="searchicon"/>
    <input placeholder="search" className="searchInput" />
  </div>
</div>
<div className="topbarRight">
<div className="topbarLinks">
<Link to="../../pages/home/Home.jsx">home</Link>
<span className="topbarLinks">timeline</span>
</div>
<div className="topbarIcon">
  <div className="topbarIconItem">
<Person/>
<span className="topbarIconBadge">1</span>
  </div>
  <div className="topbarIconItem">
<Chat/>
<span className="topbarIconBadge">1</span>
  </div>
  <div className="topbarIconItem">
<Notifications/>
<span className="topbarIconBadge">1</span>
  </div>
</div>
<img src="./asset/person/1.jpeg" alt="" className="topbarImg" />
</div>
    </div>
  )
}

export default Topbar