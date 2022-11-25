import './App.css';
import React from 'react';
import styled from 'styled-components';
import './../src/grid.css';
import {BsThreeDots} from 'react-icons/bs';

function App() {
  const openInNewTab = url => {
    window.open(`${url}` ,'_blank');
  };

  const openPopup = url => {
    window.open(`https://minas.org.uk/${url}` ,'_self');
  };
      return (
          <Wrapper>
          <Banner>
          <Header>Java</Header> 
          </Banner>
          <div className='gridP'>
                       <First  onClick={() => openPopup("index")}className="cellP" ><BsThreeDots size="5em"/></First>
                        <Second onClick={() => openInNewTab("https://github.com/MinasFakhori/bankATM.git")} className="cellP"><Text>ATM java project</Text><Img src = "bankATM.png"/></Second>
          </div>
          </Wrapper>);
}

export default App;
  
  const Banner = styled.div`
  background-color: black;
  color: white;
  height: 30vh;
  display: flex;
  border-radius: 5px;
  
  `;


const Text = styled.h3`


`;

const Img = styled.img`
width: 90%;
border-radius: 15px;
`;


  

const Wrapper = styled.div`
position: relative;
height: 100%;
transition: background-color 0.5s ease;
background-color: black;


`;
  
  const Header = styled.h1`
   
  margin: auto;
  
  
  `;



  
  
  const First = styled.div `background-color:#f3fbec; padding-top:25%; color: black;  `;
  const Second = styled.div ` background-color: #f3fbec; padding-top:7%; color: black;`;
  const Thrid = styled.div`background-color: #f3fbec; padding-top:7%; color: black;`;
  const Fourth = styled.div`background-color: #f3fbec; padding-top:7%; color: black; `;
  const Fifth = styled.div`background-color: #f3fbec; padding-top:7%; color: black;`;
  const Six = styled.div`background-color: #f3fbec; padding-top:7%; color: black;`;
  
  














