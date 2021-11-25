import React from 'react';
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Navigate from '../Components/Navigation';
import ImgStack from '../Components/ImgStack';
import Services from '../Components/Services';
import ProductIcons from '../Components/ProductIcons';
import Contact from '../Components/Contact';
import Tegan from '../Components/Tegan';
import Photos from '../Components/Carousel';

const Main = () => {
    return(
    <>
        <div className="App">
        <title>Skin Collective</title>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
            crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300&family=Rajdhani:wght@300&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Fjord+One&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.cdnfonts.com/css/aubrey" rel="stylesheet"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico"></link>
        <nav className="navigate">
            <Navigate/>
        </nav>
        <header className="App-header">
            <div className="overlay">
            <img 
                className= "img-responsive"
                src="https://res.cloudinary.com/legz444/image/upload/v1624299955/skin_collective/primary_logo_sgdmn6.png"
                width="300"
                height="300"
                alt="Skin Collective Logo"/>
            </div>
            <div className="header_btn_div">
                <button className="button" id="header_btn"><a href="https://www.myaestheticspro.com/booknow/index.cfm?6C7A1A2C8B9ED7DBDF0D8A88769FF081">Book Now</a></button>
                <button className="button" id="header_btn"><a href="https://boulder-skin-collective.myshopify.com/">Shop All</a></button>
            </div>
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
            <ProductIcons/>
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
            <footer>
            <p className="creator">This Website was developed by Allegra Hilburger © <br></br>allegraSE@protonmail.com</p>
            </footer>
        </body>
        </div>
    </>
  );
}
export default Main;