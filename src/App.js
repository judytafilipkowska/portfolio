import './App.css';
import Welcome from './components/welcome/Welcome';
import About from './components/about/About';
import ProjectList from './components/projestList/ProjectList';

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <ProjectList />
    </div>
  );
}

export default App;
