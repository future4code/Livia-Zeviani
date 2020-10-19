import React from 'react';
import './App.css';
import { CardGrande } from './components/CardGrande/CardGrande';
import { ImagemButton } from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQGQBszotHezPg/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=90wNIvUKKIi2SU-n_1TuFuoeDFE2xeaZVXjMcccZ9Hw" 
          nome="Lívia Zeviani" 
          descricao="Olá, eu sou a Lívia! Sou formada em Biologia, com especialização em Design Instrucional e dev em formação!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Veja mais"
        />
      </div>

<div className="page-section-container">
        
        <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/693/693834.svg" 
          nome="E-mail" 
          descricao="liviapavinizeviani@gmail.com"
        />
        
      
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/599b12a8e4afd5000156d46f/59bdb126d0c4540001f990ac_asta-logo.png" 
          nome="Rede Asta" 
          descricao="Designer instrucional" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App
