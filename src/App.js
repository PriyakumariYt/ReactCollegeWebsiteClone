import logo from "./logo.svg";
import React from "react";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Home from "./Router/Home";
import About from "./Router/About";
import Service from "./Router/Service"; 
import Contact from "./Router/Contact";
import Error from "./Router/Error";
// import "./Router/Style.css";
import "./App.css";
import MainHeader from "./Router/MainHeader";


function App() {
  return (
    <>
  

     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element ={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    
       </>
  );
}

export default App;
