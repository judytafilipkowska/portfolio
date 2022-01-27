import './App.css';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import ProjectList from './components/projestList/ProjectList';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Welcome />
        <About />
        <ProjectList />
        <Contact />

      </Router>

    </div>
  );
}

export default App;
