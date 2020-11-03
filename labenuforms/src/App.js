import { render } from '@testing-library/react';
import React from "react";
import styled from 'styled-components';



export default class App extends React.Component {
  state = { 
    respondeu: false
  }

  render(){

    
    return <div className={App} >
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <p>1. Qual o seu nome?</p>
      <form>
      <input type="text"  value=""></input>
      </form>
      <p>2. Qual sua idade?</p>
      <form>
      <input type="text"  value=""></input>
      </form>
      <p>3. Qual seu e-mail?</p>
      <form>
      <input type="text"  value=""></input>
      </form>
      <p>4. Qual sua escolaridade?</p>
      <form>
      <select>
        <option>Ensino médio completo</option>
        <option>Ensino médio incompleto</option>
        <option>Ensino superior completo</option>
        <option>Ensino superior incompleto</option>
      </select>
      </form>
      <button>Próxima etapa</button>

      <div>
      <h3>Etapa 2 - Informações do ensino superior</h3>
      <p>5. Qual curso?</p>
      <form>
      <input type="text"  value=""></input>
      </form>
      <p>6. Qual a unidade de ensino?</p>
      <form>
      <input type="text"  value=""></input>
      </form>
      <button>Próxima etapa</button>
    </div>
    <h3>Etapa 3 - Informações gerais de ensino</h3>
      <p>7. Por que você não terminou um curso de graduação?</p>
      <form>
      <input type="text"  value=""></input>
      </form>
      <p>8. Você fez algum curso complementar?</p>
      <form>
      <select>
        <option>Nenhum</option>
        <option>Curso de inglês</option>
        <option>Curso técnico</option>
        <option>Outro</option>
      </select>
      </form>
      <button>Próxima etapa</button>
   
    </div>
   

    
  }
}
