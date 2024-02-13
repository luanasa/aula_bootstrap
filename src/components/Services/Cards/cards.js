import React from "react";
import './cards.css';

function Cards() {
  return (
   <div className="container">
      <ul>
        <li>
          <img src="./traumato.png" alt="" />
          <span>Traumato & Ortopedia</span>
          <p>Nossos serviços de fisioterapia possuem 
            atendimento individual e personalizado.</p>
        </li>
        <li>
          <img src="./pilates.png" alt="" />
          <span>Pilates</span>
          <p>Correção de postura corporal com o objetivo é investir na 
          prevenção e reabilitação de lesões.</p>
        </li>
        <li>
          <img src="./rpg.png" alt="" />
          <span>RPG</span>
          <p>Alívio de dores, melhora da consciência corporal e do equilíbrio e 
            aumento da força e controle muscular.</p>
        </li>
      </ul>
   </div>
  )
};

export default Cards;
