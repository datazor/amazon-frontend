import React from "react";
import './App.css';
import Header from './Header.js';
import Home from "./Home";
import Checkout from "./Checkout"
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Register from "./Register";
import Login from "./Login";
import {useStateValue} from './Stateprovider';









function App() {

  

  return(
    <Router>  
    <div className="app">
     <Routes>
      
      <Route path="/" element={<div><Header/> <Home/></div>}/>
      <Route path="login" element={<div> <Login/></div>}/>
      <Route path="register" element={<div> <Register/></div>}/>
      <Route path="checkout" element={<div><Header /> <Checkout /></div>} />
      </Routes>
    </div>
    </Router>
  );  
}

export default App;
