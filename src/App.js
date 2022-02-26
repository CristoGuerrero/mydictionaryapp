import Dictionary from "./Dictionary"
import image from './4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={image} className="App-image img-fluid" alt="logo"/>  
        </header>
          <Dictionary defaultKeyword="Dictionary"/>
        <footer className="text-center">
          
          </footer>
      </div>
    </div>
  );
}

export default App;
