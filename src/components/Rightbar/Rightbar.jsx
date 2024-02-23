import React from 'react'
import './rightbar.css'
// import { Users } from '../../Dummy-data'
// import {Online} from "../online/online"

export default function Rightbar() {
  return (
    <div className='rightbar'>
<div className="rightbarwrapper">
  <div className="birthdaycontainer">
    <img src="./asset/gift.png" alt="" className="birthdayimg" />
    <span className="birthdaytext">today is <b> rohan's</b> bday</span>
  </div>
  <img src="./asset/ad.png" alt="" className="ad" />
  <h4 className="rightbartitle">onlinefrds</h4>
<ul className="rightbarfrdlist">
{/* {Users.map(u=>(
<Online key={u} user={u} ></Online>
))} */}
 

</ul>
</div>
    </div>
  )
}
