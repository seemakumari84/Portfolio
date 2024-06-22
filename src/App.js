import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TechStack from './components/TechStack/TechStack';
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/footer";
import Aboutme from "./navigation/home";
import Exp from "./navigation/Exp";
import Proj from "./navigation/Project";
import Resume from "./navigation/Resume";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter><Navbar/>
      <Routes >
        <Route path="/about-me" element={<Aboutme/>}/>
        <Route path="/Project" element={<Proj/>}/>
        <Route path="/Experience" element={<Exp/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route 
            path="/home" 
            element={
              <>
                <About />
                <TechStack />
                <Experience />
                <Projects />
                <Footer />
              </>
            }/> <Route 
            path="/" 
            element={
              <>
                <About />
                <TechStack />
                <Experience />
                <Projects />
                <Footer />
              </>
            }
          />
      </Routes></BrowserRouter>
      </div>
  );
}

export default App;
