import './App.css';
import {Routes,Route,useLocation} from 'react-router-dom';
// import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './Components/Header';
import {AnimatePresence} from "framer-motion";


function App() {
  const location =useLocation();
  return (
    <>
        <Header/>
        <div class='Container'>
        <AnimatePresence >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </AnimatePresence>
    </div>
    </>
  );
}

export default App;
