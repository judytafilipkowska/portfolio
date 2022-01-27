import './App.css';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import ProjectList from './components/projestList/ProjectList';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
