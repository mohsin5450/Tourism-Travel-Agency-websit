
import React, { useEffect } from "react";
import HomePage from './Web/Components/Home/HomePage'
import Navbar from "./Web/Components/Navbar/Navbar";
import Footer from "./Web/Components/Footer";
import AboutUs from "./Web/Components/AboutUs";
import ServicesPage from "./Web/Components/Services/ServicesPage";
import ToursPage from "./Web/Components/Tours/ToursPage";
import PackagesPage from "./Web/Components/Packages/PackagesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Web/Components/Contact/Contact";
import PackageDetail from "./Web/Components/Packages/PackageDetail";
import ServiceDetail from "./Web/Components/Services/ServiceDetail";
import ToursDetail from "./Web/Components/Tours/ToursDetail";
import Whatsapp from "./Web/Components/WhatsApp/Whatsapp";
import ScrollToTop from "./Web/Components/ScrollTop";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="App">

      <Router  >
        <ScrollToTop />
        <Navbar />
        < Whatsapp />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Services' element={<ServicesPage />} />
          <Route path='/Tours' element={<ToursPage />} />
          <Route path='/Packages' element={<PackagesPage />} />
          <Route path='/ContactUs' element={<Contact />} />
          <Route path={"/Packages/:name"} element={<PackageDetail />} />
          <Route path='/Services/:name' element={<ServiceDetail />} />
          <Route path='/Tours/:name' element={<ToursDetail />} />

        </Routes>

        <Footer />

      </Router>



    </div>
  );
}

export default App;
