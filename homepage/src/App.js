import logo from './logo.svg';
import './App.css';
import YoutubeSearch from './components/YoutubeSearchComponent';
import YoutubePlayer from './components/YoutubePlayerComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <YoutubePlayer></YoutubePlayer>
        <YoutubeSearch></YoutubeSearch>
      </header>
      
    </div>
  );
}

export default App;
