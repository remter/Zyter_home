import logo from './logo.svg';
import './App.css';
import YoutubeSearch from './components/YoutubeSearchComponent';
import YoutubePlayer from './components/YoutubePlayerComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <YoutubePlayer id = "M7lc1UVf-VE"></YoutubePlayer>
        <button type="button" onClick= {() =>YoutubePlayer.updateImage()}> Play</button>
        <YoutubeSearch></YoutubeSearch>
      </header>
      
    </div>
  );
}

export default App;
