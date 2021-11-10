import React from "react"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import About from "./Components/About"
import Service from "./Components/Service"
import Gallary from "./Components/Gallary"
import ContactUs from "./Components/ContactUs"
import Login from "./Components/Login"
import CNA from "./Components/CNA"
import Admin from "./Components/Admin"
import Details from "./Components/Details"
import './App.css'
import { BrowserRouter as Roooo, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Roooo>
      <div >
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/gallary" element={<Gallary />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/CNA" element={<CNA />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Details" element={<Details />} />
        </Routes>
        <Admin />
      </div>
    </Roooo>
  );
}

export default App;
