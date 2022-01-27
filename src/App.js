import './App.css';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import ProjectList from './components/projestList/ProjectList';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
