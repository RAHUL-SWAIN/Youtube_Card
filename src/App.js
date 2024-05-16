import './App.css';

import Header from './YoutubeCard/Header';
import YoutubeCard from './YoutubeCard/YoutubeCard';

function App() {
  return (
    <div>
      <Header />
      <div style={{display:"flex", flexWrap:'wrap'}}>
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
      </div>
    </div>
  );
}

export default App;
        
