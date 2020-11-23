import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import FormContainer from './components/Form';
import AdminContainer from './components/Admin';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  state = {
    currentPage: "FormContainer"

  }

  changePage = (currentPage) => {
    this.setState({CurrentPage: currentPage})
  }



  render (){
    const renderCurrentPage = () => {
      if (this.state.CurrentPage === "FormContainer"){
        return <FormContainer />
      } else if (this.state.currentPage === "AdminContainer") {
        return <AdminContainer/>
      }
    }
    return (
      <AppContainer>
      <Header
        changePage={this.changePage} 
      
      
      />
        {renderCurrentPage()}
      </AppContainer>
    
     );
  }
}

export default App;
