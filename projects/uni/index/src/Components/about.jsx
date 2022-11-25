import React, {Component} from 'react';
import styled from 'styled-components';
import Typed from "react-typed"
import Fade from 'react-reveal/Fade';
import 'animate.css';
import AboutPhone from './aboutPhone';

    

function About(props) {
    const texts = [
        {title: "const minasFakhori = ( ) =>",delay1:10, delay2:1500, id: 1, words :"I'm a second year Computer Science student, before pursuing my passion for CS I studied electronic engineering (level 3 and level 4). Studying electronic engineering gave me a leg up because understanding the internal structure of computers helps optimize speed. "},
        {title: "const interest = ( ) =>", delay1: 12600, delay2: 14000,id: 2, words : "Being a big fan of open source projects, one of my main interests is Linux as it allows you full freedom in what you do on your system. Being able to program allows me to adjust anything in my system or to contribute to open source projects. I also have a keen interest in machine learning and how we can use it to advance society and help people in need. " },
        {title: "const skills = ( ) =>", delay1: 30000, delay2: 31000, id: 3, words : "Using Linux for 3+ years made me learn the terminal, which I am very grateful for as most servers run on Linux, so it is crucial to know. In the first year of CS at university, I learned java, the framework JavaFX, along with OOP. We also covered JS, SQL, and AI. I taught myself to use React and git. In electronic engineering we also learned c and how to program an Arduino." }
    ];



    const renderText = () =>(
        <TextWrapper ><Text>
        {texts.map(e =>
        <div key = {e.id}>
        <Blue>
            <Typed  strings = {[e.title]}
            typeSpeed={30}
            backSpeed={25}
            startDelay= {e.delay1}
            showCursor= {false}/>
        </Blue> 
        <br/>
        <Typed  strings = {[e.words]}
        typeSpeed={30}
        backSpeed={25}
        startDelay= {e.delay2}
        showCursor= {false}/>
        <br/>
        <br/>
        </div>
        )}
        </Text></TextWrapper>); 
    

    
    return (  
        <section id = "about">     
            <Wrapper clicked = {props.isDark}>
               
            {props.isVisible ? (
            <div>
                <Fade>
                    <Heading><Blue>&lt;</Blue>about<Blue>/&gt;</Blue></Heading>
                </Fade>
    
                <Fade>
                    <Img  src="about.jpg" alt="" />
                </Fade>
         
                <Fade>
                    {renderText()}
                </Fade>
            </div>):<p></p>}
            </Wrapper>
        </section>
        );
}

export default About;


const TextWrapper = styled.div`
    width : 40vw;
    height : 58vh;
    float:left;
    margin-left: 25px;
    margin-top: 10vh;
`;



const Img = styled.img`
    display:flex;
    width : 30%;
    border-radius:15px;
    float :right;
    margin-right: 25px;
    margin-top: 10vh;


  
`
const Text = styled.div`
font-size:1.1em;


`
 

const Wrapper = styled.div`
position: relative;
height : 105vh;
background-color: ${props => (props.clicked ? "black" : "white")};
transition: background-color 0.5s ease;
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
    padding-top: 2em;
    font-weight: bold;
    
`;