import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navigate from './Components/Navigation';
import ImgStack from './Components/ImgStack';
import Services from './Components/Services';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Tegan from './Components/Tegan';
import Photos from './Components/Carousel';

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
      <link href="//db.onlinewebfonts.com/c/f109f08852742e27f747f260abdf6fb8?family=Aubrey" rel="stylesheet" type="text/css"/>
      <nav className="navigate">
        <Navigate/>
      </nav>
      <header className="App-header">
        <div className="overlay">
          <img 
            className= "img-responsive"
            src="https://res.cloudinary.com/legz444/image/upload/v1624299963/skin_collective/secondary_logo_byvxqd.png"
            width="400"
            height="400"
            alt="Skin Collective Logo"/>
        </div>
        <Button className="button" href="https://www.myaestheticspro.com/booknow/index.cfm?6C7A1A2C8B9ED7DBDF0D8A88769FF081">Schedule Now</Button>
      </header>
      <body>
        <article className="mission">
          <h1 className="mission-text">Your skincare is so much more than an afterthought, it is an <br></br><br></br><span className="special_words">INTENTIONAL PRACTICE</span><br></br><br></br> that is handpicked just for you. </h1>
        </article>
        <article className="About">
          <ImgStack/>
        </article>
        <article id="services" className="Services">
          <Services/>
        </article>
        <article id="products" className="Products">
          <Products/>
        </article>
        <article id="about" className="Tegan">
          <Tegan/>
        </article>
        <article className="carousel">
          <Photos/>
        </article>
        <article id="contact" className="Contact">
          <Contact/>
        </article>
      </body>
    </div>
    
    </>
  );
}

export default App;
