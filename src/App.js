import './App.css';
import Navbar from "../src/Components/Navbar";
import Hero from './Components/Hero';
import About from './Components/About';
import RentSneakers from './Components/RentSneakers';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <About />
      <RentSneakers />
    </div>
  );
}

export default App;
