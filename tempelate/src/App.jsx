import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ProductPage from "./pages/ProductPage"
import InquiryPage from "./pages/InquiryPage"
import Footer from "./components/Footer"
import Navbar from './components/NavBar'
import SmoothScroll from './SmoothScroll'

/* Wrap the app in SmoothScroll */
const App = () => {
  return (
    
    <Router>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col">

        <Navbar />

        {/* Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/inquiry" element={<InquiryPage />} />
          </Routes>
        </div>
        {/* Footer */}
        <Footer />


      </div>
      </SmoothScroll>
    </Router>
    
  )
}

export default App
