import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #F18653;
    color: #FFFFFF;

`
const BotaoContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-between;
`

const Header = (props) => {
    return (
       <HeaderContainer>
           <h1>Labefy</h1>
           <div>
               <BotaoContainer>
                    <button onClick={() => props.changePage("FormContainer")}>Cadastrar </button>
                    <button onClick={() => props.changePage("AdminContainer")}>Administrar </button>
               </BotaoContainer>
               
           </div>
       </HeaderContainer>
    )
}

export default Header