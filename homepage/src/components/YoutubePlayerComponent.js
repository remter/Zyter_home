

import React, { useEffect } from "react"
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


var player;

var id = 'OlatcoeSYno';

function onPlayerReady(event) {
    
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data === window.YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 60000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
function toggleMute() {
  if (player.isMuted()){
  player.unMute();
  }
  else{
    player.mute();
  }
}
function playVideo() {
  player.playVideo();
}
function switchVideo() {
  
  
  
  if(id === 'M7lc1UVf-VE'){
    //console.log("Current Id is:" + id);
    id = 'OlatcoeSYno';
    player.loadVideoById(id);
    //console.log("Updated Id:" + id);
    updateImage()
  }
  else{
    //console.log("Current Id is:" + id);
    id = 'M7lc1UVf-VE';
    player.loadVideoById(id);
    //console.log("Updated Id:" + id);
    updateImage()

  }
}



function onYouTubeIframeAPIReady() {
  
  console.log("Youtube is loaded", window.YT);

  // wait till YT lib is ready
  window.YT.ready(function() {
    console.log("Player is being updated and the id is: "+ id);
    player = new window.YT.Player('player', {
      height: '300',
      width: '400',
      videoId: id,
      playerVars: {
        // 'autoplay': 1, 'mute': 1 
        'enablejsapi': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });})

}


//Update Image
function updateImage(){
  document.getElementById("thumbnail").src = 'https://i.ytimg.com/vi/' + id + '/default.jpg';

}



function YoutubePlayer(){

    useEffect(() => {
      //load script for YT lib
        if(!window.YT){
          var tag = document.createElement('script');
          tag.async = true;
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          //when loaded then call the onYouTubeIframeAPIReady.
          tag.onload = onYouTubeIframeAPIReady;
        }
        //Once loaded there is no need to create a new script
        else{
          
          onYouTubeIframeAPIReady();
        }
      });
      function updateVideo(videoId){
        id = videoId;
        
        console.log("Updated Id:" + id);
        player.loadVideoById(id);
        updateImage();
      
      }
      
    
        return(
            <div>
                <div id="player" style={{display: 'none'}} >
                </div>

                <div>
                    <img id = "thumbnail" src={'https://i.ytimg.com/vi/' + id + '/default.jpg'} width="400" height="300" alt="Video image"/>
                </div>
                <div>
                    <button type="button" onClick= {playVideo}> Play</button>
                    <button type="button" onClick= {toggleMute}> Toggle Mute</button>
                    <button type="button" onClick= {stopVideo}> Pause</button>
                    <button type="button" onClick= {switchVideo}> Change Video</button>
                </div>

            </div>
        )
    
}

export default YoutubePlayer;
