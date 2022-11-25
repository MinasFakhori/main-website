import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {addDoc , collection } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import {db} from './../Data/firebase-config.js';


function Contact(props) {
    const [name , setName] = useState(" ");
    const [email , setEmail] = useState(" ");
    const [message , setMessage] = useState(" ");
    
    const peopleCollectionRef = collection(db , "people");
    
    const form = useRef();
    
    const openInNewTab = url => {
        window.open(url ,'_self');
      };
    

    const sendEmail = (e) => {
        e.preventDefault();
        {createUser()}
        emailjs.sendForm("service_3las473", 'template_ycnsg3a', form.current, '4zdDju3MwnJ0FmfD1')
          .then((result) => {
            openInNewTab("https://minas.org.uk/redirect/");
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
 
    const createUser = async () =>{
        await addDoc(peopleCollectionRef, {name : name , email: email , message : message});
    }

    const links = [
      {name :"Github" , link : "https://github.com/MinasFakhori" , icon : "nav_icons/reshot-icon-github-NY46M9DGFU.svg" },
      {name :"Linkedin" , link : "https://www.linkedin.com/in/minas-fakhori-5831111ba" , icon : "nav_icons/linkedin.png" },
      {name :"Instagram" , link : "https://www.instagram.com/_minas123/" , icon : "nav_icons/instagram (1).png" }, 
     ];

  
   
    
    return ( 
        <section id = "PageTemp">
             <Wrapper clicked = {props.isDark}>
             <Heading><Blue>&lt;</Blue>contact<Blue>/&gt;</Blue></Heading>
             <FormDiv>
                <form ref={form} onSubmit={sendEmail}>
                <LableText><Blue>.</Blue>name<Blue>( )</Blue></LableText>
      <Input onChange={(event) => setName(event.target.value)} type='text' required />
      <LableText><Blue>.</Blue>email<Blue>( )</Blue></LableText>
      <Input onChange={(event) => setEmail(event.target.value)} type='email' required />
      <LableText><Blue>.</Blue>message<Blue>( )</Blue></LableText>
      <Textarea name="message" onChange={(event) => setMessage(event.target.value)} type='text' required  />
      <Button type="submit" value="Send" />
    </form>
    </FormDiv> 
    <Img src = "retina_1708x683_cover-0327-DesignThinkingProcess_Dan_Newsletter-ebb7443c026c152a7e7c6ef42676e40a-PhotoRoom (2).png"></Img>
    <ImgText>Find me on</ImgText>
<ImgWrap>
{links.map(e => <ImgIcon onClick = {() => window.open(e.link) } src={e.icon} key ={e.name} />)}
  </ImgWrap>             
              
              </Wrapper>

        </section>
    )}

export default Contact;

const ImgIcon = styled.img`
margin-top : 1%;
margin-bottom : 1%;
padding : 10px; 
background-color: #0063B6; 
    width : 3em; 
    border-radius: 10px;
    margin-left: 5px;
    margin-right: 5px;
    `;

const ImgText = styled.p`
    margin-top:2%;
    text-align: center;
    font-size:0.9em;
    color: grey;
    
    `;

const ImgWrap = styled.div`
margin-left:auto;
margin-right:auto;
width:5em;
display: flex;
justify-content: center;
margin-bottom: 4%;
cursor: pointer;
`;

const LableText = styled.p`
margin-top : 1em;
margin-bottom: -1px;
text-align:center;
font-size: 1.3em;

`;

const Button = styled.input`
width: 80%;
border-radius: 6px;
border: none;
margin-bottom: 1em;
margin-top : 1em;
background-color: #0063B6;

@media (max-width: 1023px){
   width: 100px;
   height: 40px;
   
  }
`;
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

const Img = styled.img`
display:block;
float:right;
margin-top: -24em;

width: 40em;

@media (max-width: 1023px){
  display:none;
  }

`;


const FormDiv = styled.div`
display:flex;
border: 5px solid #0063B6;
width : 50%;
text-align:center;
justify-content:center;
margin-top: 3em;
margin-left: 1em;
border-radius: 15px;

@media (max-width: 1023px){
   width: 78%;
   margin-top:-4px;
   
   margin-left:auto;
   margin-right:auto;
  }

`;

const Input = styled.input`
border-radius: 5px;

`;


const Textarea = styled.textarea`
width: 15em;
height: 10em;
border-radius: 12px;
padding: 5px;

@media (max-width: 1023px){
   width: 95%;
  
   margin-left:auto;
   margin-right:auto;
  }


`

const Label = styled.label`
display:block;
margin-top: 5em;

`;