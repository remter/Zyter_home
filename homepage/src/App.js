import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeSearch from './components/YoutubeSearchComponent';
import YoutubePlayer from './components/YoutubePlayerComponent';

function App() {
  
  const [ ytprops, setYTProps ] = useState({id: 'Wqww1B9wljA'});
  // let ytprops = {
  //   id:"Wqww1B9wljA"
  // }
  YoutubePlayer(ytprops);
  
  function updateVideo(){
    ytprops.id = "OlatcoeSYno";
  }
  return (
    <div className="App">
      <header className="App-header">
        
        
        <div id="player" > </div>
        <button onClick = {() => { setYTProps({id:'dQw4w9WgXcQ'}) }}> Play Music</button>
        <YoutubeSearch></YoutubeSearch>
      </header>
      
    </div>
  );
}

export default App;
