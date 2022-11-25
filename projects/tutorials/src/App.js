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
          <Header>Tutorials</Header> 
          </Banner>
          <div className='gridP'>
                       <First  onClick={() => openPopup("index")}className="cellP" ><BsThreeDots size="5em"/></First>
                        <Second onClick={() => openInNewTab("linux/bootable-usb-to-normal-usb")} className="cellP"><Text>Bootable USB to normal USB</Text><Img src = "bootableusb.png"/></Second>
                        <Thrid onClick={() => openInNewTab("linux/vscode-onArch")} className="cellP"><Text>Install VS code on arch</Text><Img src = "codeOnArch.png"/></Thrid>
                        <Fourth onClick={() => openInNewTab("git-and-github")} className="cellP"><Text>Git and Github tutorial</Text><Img src = "git.png"/></Fourth>
                        <Fifth onClick={() => openInNewTab("linux/lid")} className="cellP"><Text>Fix the airplane mode issue when lid closed (HP)</Text><Img src = "lid.png"/></Fifth>
                        <Six onClick={() => openInNewTab("linux/installLinux")} className="cellP"><Text>Installing arch</Text><Img src = "arch.png"/></Six>
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
  
  














