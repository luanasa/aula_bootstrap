import './about.css';

function About() {
  return (
    <div className="container-about">
      <img src="./man.png" alt="" />

      <div className="about-text">
        <h1>Entenda quem somos e por que <span>existimos</span></h1>
        <p>
        A missão do Espaço Renove é ser a principal referência em serviços
         de fisioterapia, por meio de instalações avançadas, equipe altamente qualificada e compromisso com o bem-estar de nossos pacientes. Estamos empenhados 
         em garantir a confiabilidade e excelência em tudo o que fazemos.
        </p>
      </div>
    </div>
  );
}

export default About;