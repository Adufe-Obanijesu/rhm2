import {Routes, Route, BrowserRouter} from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing pages
import Homepage from "./pages/Homepage";
import Programmes from "./pages/Programmes";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
