import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/Rightbar/Rightbar'
import './Home.css'
const Home = () => {
  return (
  
  <>
<Topbar/>
<div className="Homecontainer">
  <Sidebar></Sidebar>
  <Feed></Feed>
  <Rightbar></Rightbar>
</div>
  </>
  )
}

export default Home