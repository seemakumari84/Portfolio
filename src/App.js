import './App.css';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TechStack from './components/TechStack/TechStack';
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <TechStack/>
      <Experience />
      <Projects />
      <Footer/>
      </div>
  );
}

export default App;
