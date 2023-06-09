
import './App.css';
import MoviesList from './Components/MoviesList/MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies Library</h1>
        <h4>by Dejan Mladenovski</h4>
      </header>
      <div>
        <MoviesList/>
      </div>
    </div>
  );
}

export default App;
