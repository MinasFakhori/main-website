import React from 'react';
import styled from 'styled-components';


function Terminal() {
    return (  
        <div>
            <Wrapper>
            	<Iframe src="terminal/index.html"></Iframe>             			
			      </Wrapper>
        </div>
    );
}

export default Terminal;

const Wrapper = styled.div`
display:flex;
justify-content: center;
margin-top: 5em;
border-width: 50px;
    border-color: red;
`;


const Iframe = styled.iframe`

border-width: 5px;
border-color: red;
border-radius: 15px;
border-style: dashed;
width: 50em;
height : 40vh;
`;