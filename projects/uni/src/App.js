import './App.css';
import React from 'react';
import styled from 'styled-components';
import './../src/grid.css';
import {BsThreeDots} from 'react-icons/bs';

function App() {
  const openInNewTab = url => {
    window.open(`https://minas.org.uk/${url}` ,'_blank');
  };

  const openPopup = url => {
    window.open(`https://minas.org.uk/${url}` ,'_self');
  };
      return (
          <Wrapper>
          <Banner>
          <Header>Universty Work</Header> 
          </Banner>
          <div className='gridP'>
                       <First  onClick={() => openPopup("index")}className="cellP" ><BsThreeDots size="5em"/></First>
                        <Second onClick={() => openInNewTab("uni/first_year/ai")} className="cellP"><Text>AI learning materials website</Text><Img src = "ai.png"/></Second>
                        <Thrid onClick={() => openInNewTab("uni/first_year/js")} className="cellP"><Text>JS learning materials website</Text><Img src = "js.png"/></Thrid>
                        <Fourth onClick={() => openInNewTab("uni/first_year/webdev/tutorial.html")} className="cellP"><Text>Learning journal (assignment)</Text><Img src = "website.png"/></Fourth>
                        <Fifth onClick={() => openInNewTab("uni/first_year/group/")} className="cellP"><Text>Group project (assignment)</Text><Img src = "group.png"/></Fifth>
                        <Six onClick={() => openInNewTab("uni/first_year/cybersec")} className="cellP"><Text>Cyber security learning materials website</Text><Img src = "cyber.png"/></Six>
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
  
  














