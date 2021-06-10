import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navigate from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <title>Skin Collective</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <nav>
        <Navigate/>
      </nav>
      <header className="App-header">
        <div className="overlay"><h1>Skin Collective</h1></div>
        <Button variant="info">Schedule Now</Button>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
