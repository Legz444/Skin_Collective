import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navigate from './Components/Navigation';
import ImgStack from './Components/ImgStack';
import Services from './Components/Services';
import Products from './Components/Products';

function App() {
  return (
    <>
    <div className="App">
      <title>Skin Collective</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Fjord+One&display=swap" rel="stylesheet"></link>
      <nav className="navigate">
        <Navigate/>
      </nav>
      <header className="App-header">
        <div className="overlay"><h1>Skin Collective</h1></div>
        <Button variant="info">Schedule Now</Button>
      </header>
      <body>
        <article id="about" className="mission">
          <h1 className="mission-text">This is my mission statement. We care about all these things. This is why you choose Skin Collective</h1>
        </article>
        <article className="Pictures">
          <ImgStack/>
        </article>
        <article id="services" className="Services">
          <Services/>
        </article>
        <article id="products" className="Products">
          <Products/>
        </article>
      </body>
    </div>
    
    </>
  );
}

export default App;
