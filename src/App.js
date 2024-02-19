import './App.css';
import Navbar from "../src/Components/Navbar";
import Hero from './Components/Hero';
import About from './Components/About';
import RentSneakers from './Components/RentSneakers';
import HowItWorks from './Components/HowItWorks';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <About />
      <RentSneakers />
      <HowItWorks />
      <ContactUs />
    </div>
  );
}

export default App;
