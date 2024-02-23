import './share.css'
import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material'

export default function Share() {
  return (
    <div className='share'>
     <div className="sharewrapper">
        <div className="sharetop">
            <img src="./asset/person/1.jpeg" alt="" className="profilepic" />
           <input placeholder='thoughts' className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
            <div className="shareoptions">
                <div className="shareoption">
                    <PermMedia htmlColor='tomato'  className='shareicon'/>
                    <span className='shareoptiontext'>photo/video</span>
                </div>
                <div className="shareoption">
                    <Label htmlColor='green' className='shareicon'/>
                    <span className='shareoptiontext'>tag</span>
                </div>
                <div className="shareoption">
                    <Room htmlColor='blue' className='shareicon'/>
                    <span className='shareoptiontext'>location</span>
                </div>
                <div className="shareoption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareicon'/>
                    <span className='shareoptiontext'>react</span>
                </div>
            </div>
            <button className="sharebutton">share</button>
        </div>
     </div>
    </div>
  )
}
