import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="left-section">
          <div className="logo-container">
            <img src="IMG.jpeg" alt="logo" className="logo" />
          </div>
          <div className="navigation button">
            <button><Link to="/">Home</Link></button>
            <button ><Link to="/about">About</Link> </button>
            <button><Link to="/contact">Contact</Link></button>
          </div>

        </div>
         <div className="lnavigation">
          <img src="Logo Be.svg" alt="logo" className="logo"/>
          <img src="dribbble-ball-mark.svg" className='logo'/>
          <img src="Logo Linkedin.svg" className='logo'/>
          {/* <button></button>
          <button>Sign up</button> */}
        </div> 
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


