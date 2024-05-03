import MovieList from '../components/MovieList';
import '../stylesheets/App.css';

function App(props) {
  return (
    <div className="App">

      <h1>Favorite Movies</h1>

      {/* <MovieList /> */}
      {props.children}
      



      
    </div>
  );
}

export default App;
