import { Posts } from '../../Dummy-data'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'

export default function Feed() {
  return (
    <div className="feed">
      <div className='feedwrapper'>
      <Share></Share>
    {Posts.map((p)=>(
     <Post key={p.id} a={p} />
    ))}

 
     

      </div>
    </div>
  )
}
