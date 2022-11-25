import React from 'react';
import styled from 'styled-components';
import Typed from "react-typed";
import Fade from 'react-reveal';
import '../css/home.css';
import 'animate.css';
import Test from './test';




const Home = (props)=> {





    return ( 
        <section id  = "home">
            <Wrapper clicked = {props.isDark}>
            {props.isVisible ? (
            <div> 
                <Heading>Hey there👋<br />Welcome to minas.<Blue><Typed  strings={[ "org.uk( )" ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop />
                </Blue></Heading>
               
       
                    <div className="animate__animated animate__zoomIn" >
                    <MainIMG src = "home/header-img.svg" alt="Header Img"/>
                    </div>
            
       
            <div className="container">

            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            </div></div>
            ):<div></div>}
            </Wrapper>
        </section>
     );
    };
    
export default Home;
    
    const ImgText = styled.p`
    margin-top:7%;
    text-align: center;
    font-size:0.9em;
    color: grey;
    
    `;
    
    
    const MainIMG = styled.img`
    display:block;
    width : 30%;
    margin-top: 5%;
    margin-left:auto;
    margin-right:auto;
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;

@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}

@media (max-width: 1023px){
    margin-top: 5em;
    width: 65%;
    min-width: 200px;
  }

`;

const ImgWrap = styled.div`
margin-left:auto;
margin-right:auto;
width:99%;
display: flex;
justify-content: center;
margin-bottom: 4%;
cursor: pointer;
`;


const Img = styled.img`
margin-top : 1%;
margin-bottom : 1%;
padding : 10px; 
background-color: #0063B6; 
    width : 3em; 
    border-radius: 10px;
    margin-left: 5px;
    margin-right: 5px;
    `;
    
    
    
    
    
    
    const Wrapper = styled.div`
    position: relative;
    
    height : 110vh;
    background-color: ${props => (props.clicked ? "black" : "white")};
    transition: 0.6s ease;
    color: ${props => (props.clicked ? "white" : "black")};
`;


const Blue = styled.span`
color:#0063B6;
`


const Heading = styled.h2`
display: block;
position: relative;
justify-content: center;
text-align: center;
padding-top: 3em;
font-weight: bold;

`;



