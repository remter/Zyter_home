

import React, { useEffect } from "react"


// Default video
//var id = 'OlatcoeSYno';
var player;

function onPlayerReady(event) {
    
}

function YoutubePlayer(ytprops){
  


  useEffect(() => {
    //load script for YT lib
      if(!window.YT){
        var tag = document.createElement('script');
        tag.async = false;
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        //when loaded then call the onYouTubeIframeAPIReady.
        tag.onload = onYouTubeIframeAPIReady;
      }
      //Once loaded there is no need to create a new script
      else{
        // player.loadVideoById(id);
        updateVideo(ytprops.id);
      }
  });


  function createIframe (vIds = "6JhVo2zS8hU"){
    console.log("Player Id is: " + vIds);
    player = new window.YT.Player('player', {
      height: '300',
      width: '400',
      videoId: vIds,
      playerVars: {
        // 'autoplay': 1, 'mute': 1 
        'enablejsapi': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });

  }

  function onYouTubeIframeAPIReady() {
  
    console.log("Youtube is loaded");
  
    // wait till YT lib is ready
    window.YT.ready(function() {
      //console.log("Player is being updated and the id is: "+ ytprops.id);
      createIframe();

      // player = new window.YT.Player('player', {
      //   height: '300',
      //   width: '400',
      //   videoId: vIds,
      //   playerVars: {
      //     // 'autoplay': 1, 'mute': 1 
      //     'enablejsapi': 1
      //   },
      //   events: {
      //     'onReady': onPlayerReady,
      //     'onStateChange': onPlayerStateChange
      //   }
      // });
    })
  
  }

  //Update Now Playing video
  function updateVideo(videoId){ 
    
    
    console.log("Updated Id:" + videoId);
    player.loadVideoById(videoId); //Load the video by using youtube's API
  
  }


  var done = false;
  function onPlayerStateChange(event) {

  }


  //Basic player commands
  function toggleMute() {
    if (player.isMuted()){
    player.unMute();
    }
    else{
      player.mute();
    }
  }

  function stopVideo() {
    player.stopVideo();
  }
  
  function playVideo() {
    player.playVideo();
  }
  

  //Internal commands 
  // function updateImage(){
  //   console.log("image updated")
  //   document.getElementById("thumbnail").src = 'https://i.ytimg.com/vi/' + id + '/default.jpg';
  
  // }
  return{
    onYouTubeIframeAPIReady: onYouTubeIframeAPIReady,
    // updateVideo: updateVideo,
    useEffect: useEffect
  }
      
    

}

export default YoutubePlayer;
