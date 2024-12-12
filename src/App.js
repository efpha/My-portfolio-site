import './App.css';
import './mediaqueries.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutme from './Components/Aboutme';
import Experience from './Components/Experience';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Experience />
    </div>
  );
}

export default App;
