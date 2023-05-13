import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Works from './components/Works';
import Fade from 'react-reveal/Fade';



function App() {


  return (
    <div className="App">
      <Header></Header>
      <Fade left>
      <AboutMe></AboutMe>
      </Fade>
      <Works></Works>
      
    </div>
  );
}

export default App;
