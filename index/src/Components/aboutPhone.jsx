import React, {Component} from 'react';
import styled from 'styled-components';
import Typed from "react-typed"
import Fade from 'react-reveal/Fade';
import 'animate.css';



function AboutPhone(props) {
    const texts = [
        {title: "const minasFakhori = ( ) =>",delay1:10, delay2:2500, id: 0 ,words :"I'm a second year Computer Science student. Being a big fan of open source projects, one of my main interests is Linux as it allows full freedom in what you do on your system. Using Linux for 3+ years made me learn the terminal, this is crucial as most servers run on Linux. In the first year of CS at university, I learned java, the framework JavaFX, along with OOP. We also covered JS, SQL, and AI. I taught myself to use React and git. In electronic engineering we also learned c and how to program an Arduino." }
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
                    {renderText()}
                </Fade>
            </div>):<p></p>}
            </Wrapper>
        </section>
        );
}

export default AboutPhone;


const TextWrapper = styled.div`
    width : 90%;
    margin-left: 25px;
    margin-top: 2em;
`;




const Text = styled.div`
font-size:1.2em;


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






















    const texts = [
        {title: "const minasFakhori = ( ) =>",delay1:10, delay2:1500, words :"I'm a second year Computer Science student.Being a big believer of open source projects, one of my main interests is Linux as it allows you full freedom in what you do on your system. Being able to program allows me to adjust anything in my system. Using Linux for 3+ years made me learn the terminal, this is crucial because most servers run on Linux. In the first year of CS at university, I learned java, the framework JavaFX, along with OOP. We also covered JS, SQL, and AI. I taught myself to use React and git. In electronic engineering we also learned c and how to program an Arduino." }
    ];
