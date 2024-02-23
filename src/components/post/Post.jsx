import "./post.css"
import { MoreVert } from "@mui/icons-material"
import { Users } from "../../Dummy-data"
import { useState } from "react"

export default function Post({a}) {
  const [like,setlike]=useState(a.like)
  const [islike,setislike]=useState(false)
  const likehandle=()=>{
setlike(islike ? like-1:like+1)
setislike(!islike)
  }
  return (
    <div className="post">
    <div className="postwrapper">
        <div className="postTop">
        <div className="postTopLeft">
          <img src={Users.filter(u=>u.id===a.userId)[0].profilePicture}
           alt="" className="postProfileImg" />
        <span className="postUsername">{Users.filter(u=>u.id===a.userId)[0].username}</span>
        <span className="date">{a.date}</span>
        </div>
        <div className="posttopright">
            <MoreVert/>
        </div>
        </div>
        <div className="postCenter">
            <span className="posttext">{a?.desc}</span>
            <img src={a.photo} alt="error" className="postImg" />
        </div>
        <div className="postBottom">
        <div className="postBottomLeft">
            <img className="likeicon" src="./asset/heart.png" alt="" onClick={likehandle}/>
            <img className="likeicon" src="./asset/like.png" alt="" onClick={likehandle}/>
            <span className="postLikeCounter">{like}people</span>
        </div>
        <div className="postbottomright">
            <span className="postCommentText">{a.comment}comments</span>
        </div>
        </div>
    </div>
    </div>
  )
}
