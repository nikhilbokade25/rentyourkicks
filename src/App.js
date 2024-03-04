import './App.css';
import Navbar from "../src/Components/Navbar";
import Hero from './Components/Hero';
import About from './Components/About';
import RentSneakers from './Components/RentSneakers';
import HowItWorks from './Components/HowItWorks';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SneakerData from './Components/SneakerData';
import { NIKE_DATA } from './Components/SneakerData';
import SneakerCompleteDetails from './Components/SneakerCompleteDetails';
import SneakerDisplay from './Components/SneakerDisplay';


function App() {

  return (
    <div className="App">

      <Navbar/>
      <Hero />
      <About/>
      <RentSneakers />
      <HowItWorks />
      <ContactUs />
      <Footer />

      
    </div>
  );
}

export default App;
