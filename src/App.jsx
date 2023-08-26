import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Careers from "./pages/careers";
import Products from "./pages/products";
/*import Header from "./components/Header";*/
import Footer from "./components/Footer";
import Contact from "./pages/contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
