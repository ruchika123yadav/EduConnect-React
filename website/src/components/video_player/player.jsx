import React from 'react'
import './player.css'
import video from '../../assets/video.mp4'

function Player({playState,setPlayState}) {
  return (
    <div className={`video-player ${playState?'':'hide'}`}>
      <video src={video} autoPlay muted controls ></video>


      
    </div>

    
  )
}

export default Player
