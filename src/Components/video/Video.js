import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import "./_video.scss"
function Video(props) {
    return (
        <div className="video">
            <div className="video_top">
                <img src="https://i.ytimg.com/an_webp/N3AkSS5hXMA/mqdefault_6s.webp?du=3000&sqp=CMCxh5IG&rs=AOn4CLB6tb9QPZ-U-EnYGplIghIVfVfXOg" alt=""/>
                <span>06:45</span>
            </div>
            <div className="video_tittle">
                This was dummy video
            </div>
            <div className="video_details">
                <span>
                    <AiFillEye/> 5m Views *
                </span>
                <span>5 days ago</span>

            </div>
            <div className="video_chennel">
                <img src="https://yt3.ggpht.com/ytc/AKedOLToeqsgSDL71E1Vx6PmHKsv9SIjdJbjHcaDScd7GA=s88-c-k-c0x00ffffff-no-rj" alt=""/>
                <p>Saravana@appiness</p>
            </div>
            
        </div>
    );
}

export default Video;