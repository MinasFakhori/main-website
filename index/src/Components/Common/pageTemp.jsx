import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function PageTemp(props) {
    return ( 
        <section id = "PageTemp">
              <Wrapper clicked = {props.isDark}>
              {props.isVisible ? (
                <Fade>
                    <Heading><Blue>&lt;</Blue>PageTemp<Blue>/&gt;</Blue></Heading>
                </Fade>
            
              ) : <p></p>}

              </Wrapper>

        </section>
    )}

export default PageTemp;


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