import './App.css';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import ProjectList from './components/projestList/ProjectList';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResponsiveNavbar from './components/responsiveNavbar/responsiveNavbar';

function App() {
  return (
    <div className="App">
      
        <ResponsiveNavbar/>
        <Welcome />
        <About />
        <ProjectList />
        <Contact />
        
    </div>
  );
}

export default App;
