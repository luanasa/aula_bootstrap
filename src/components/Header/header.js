import React from "react";
import './header.css';

function Header() {
  return (
    <header className="header">
      <img src="./logo.svg" alt="" />

      <div className="hero">
        <h1>
          <span>Seu caminho para</span> um melhor bem-estar físico <span>começa aqui</span>
        </h1>
        <p>Conte com nossos especialistas em fisioterapia 
          para ajudá-lo a se mover melhor e a se sentir melhor.
        </p>
        <button>AGENDAR CONSULTA</button>

      </div>

      <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </header>
  );
}

export default Header;
