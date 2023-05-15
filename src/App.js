import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Contacto from './components/Contacto';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/Slide';




function App() {


  return (
    <div className="App">
      <Fade>
      <Header></Header>
      </Fade>
      <Fade left>
      <AboutMe></AboutMe>
      </Fade>
      <Fade right>
      <Works></Works>
      </Fade>
      <Contacto></Contacto>
      
    </div>
  );
}

export default App;
