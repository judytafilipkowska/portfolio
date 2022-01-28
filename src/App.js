import './App.css';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import ProjectList from './components/projestList/ProjectList';
import Contact from './components/contact/Contact';
import ResponsiveNavbar from './components/responsiveNavbar/responsiveNavbar';

function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  return (
    <div className="App">

      <ResponsiveNavbar />
      <Welcome />
      <About />
      <ProjectList />
      <Contact />

    </div>
  );
}

export default App;
