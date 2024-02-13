import React from "react";
import './services.css';
import Cards from "./Cards/cards";

const Services = () => {
  return (
   <div className="container">
    <h1>Seu espaço de confiança em fisioterapia.</h1>

    <div className="cards">
      <Cards />
    </div>
   </div>
  )
};

export default Services;
