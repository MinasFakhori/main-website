import React, {useState} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Circle from 'react-circle';
import { useInView } from 'react-intersection-observer';
import {BsArrowDown , BsArrowUp} from 'react-icons/bs'



function Qualifications(props) {
  let [firstStyle , setFirstStyle]= useState({});
  let [secondStyle , setSecondStyle] = useState({});
  let [thirdStyle , setThirdStyle] = useState({});
  let [downLink , setdownLink] = useState(<BsArrowDown color= "white"/>);
  let [firstClick, setFirstClick] = useState(true);
  let [secondClick, setSecondClick] = useState(true);
  let [thirdClick, setThirdClick] = useState(true);


  


let dark = "white";

  const isDarks = (props) => {
    if (props.isDark){
      dark = "white"; 
   
      return dark; 
    } else{
      dark = "black"; 
     
      return dark;
    }
  }


   
    
    const firstButton = () =>{
    if (firstClick === true){
        firstClick = false;
        downLink = <BsArrowUp  color= "white" /> ;
        firstStyle = {height: "50vh" ,  transition: "0.4s"}
        secondStyle = {display: "none" , transition: "0.4s"};
        thirdStyle = {display: "none" ,transition: "0.4s"};
      }else {
        firstClick = true;
        downLink = <BsArrowDown  color= "white" />
        secondStyle = {display: "block"};
        thirdStyle = {display: "block"};
        firstStyle = {height: "7em" , transition: "0.4s"}
    }
    setFirstStyle(firstStyle)
    setSecondStyle(secondStyle);
    setThirdStyle(thirdStyle);
    setFirstClick(firstClick);
    setdownLink(downLink);
   
   }


   const secondButton = () =>{
    if (secondClick === true){
      secondClick = false;
      downLink = <BsArrowUp color= "white" />
        secondStyle = {height: "50vh" ,  transition: "0.4s"};
        firstStyle = {display: "none" , transition: "0.4s"};
        thirdStyle = {display: "none" ,transition: "0.4s"};
      }else {
        secondClick = true;
        downLink = <BsArrowDown color= "white" />
        firstStyle = {display: "block"};
        thirdStyle = {display: "block"};
        secondStyle = {height: "7em" , transition: "0.4s"}
    }
    setFirstStyle(firstStyle)
    setSecondStyle(secondStyle);
    setThirdStyle(thirdStyle);
    setSecondClick(secondClick);
    setdownLink(downLink);
   
   }



   const thirdButton = () =>{
    if (thirdClick === true){
      thirdClick = false;
      downLink = downLink = <BsArrowUp color= "white" />
        thirdStyle = {height: "50vh" ,  transition: "0.4s"};
        firstStyle = {display: "none" , transition: "0.4s"};
        secondStyle = {display: "none" ,transition: "0.4s"};
      }else {
        thirdClick = true;
        downLink = <BsArrowDown color= "white" />
        firstStyle = {display: "block"};
        secondStyle = {display: "block"};
        thirdStyle = {height: "7em" , transition: "0.4s"}
    }
    setFirstStyle(firstStyle)
    setSecondStyle(secondStyle);
    setThirdStyle(thirdStyle);
    setThirdClick(thirdClick);
    setdownLink(downLink);
   }



  let n = 0;
  
  const { ref: isInView, inView: isVisible } = useInView(); 

  const firstfirst = () =>{
    n = (isVisible ? 90: 0);
    return n;
  } 


  const firstsecond = () =>{
    n = (isVisible ? 90: 0);
    return n;
  } 

  const firstthird = () =>{
    n = (isVisible ? 80: 0);
    return n;
  } 



  const secondFirst = () =>{
    n = (isVisible ? 75: 0);
    return n;
  } 


  const secondSecond = () =>{
    n = (isVisible ? 80: 0);
    return n;
  } 

  const secondThird = () =>{
    n = (isVisible ? 65: 0);
    return n;
  } 


  const secondForth = () =>{
    n = (isVisible ? 74: 0);
    return n;
  } 
  const secondFith = () =>{
    n = (isVisible ? 78: 0);
    return n;
  } 


  const secondSix = () =>{
    n = (isVisible ? 80: 0);
    return n;
  } 


  const thirdFirst = () =>{
    n = (isVisible ? 88: 0);
    return n;
  } 

  const thirdSecond = () =>{
    n = (isVisible ? 92: 0);
    return n;
  } 

  const thirdThird = () =>{
    n = (isVisible ? 96: 0);
    return n;
  } 


  const thirdFourth = () =>{
    n = (isVisible ? 93: 0);
    return n;
  } 


  const thirdFith = () =>{
    n = (isVisible ? 89: 0);
    return n;
  } 


  const thirdSix = () =>{
    n = (isVisible ? 90: 0);
    return n;
  } 







   
  

  const item = {
    marginTop : "1em",
    justifyContent: "center",
    marginRight: "1em",
    marginLeft :"1em"
  }




  const size = () =>{
   
    if (window.innerWidth >= 1023){
      return 100;
    }else{
      return 60;
    }
  }


  

   const firstCircle = () => {
    if (firstClick ==false){
        return( 
            <ContainerOne ref = {isInView}>        
        <div style = {item}>
           <Circle 
           animate={true} // Boolean: Animated/Static progress
           animationDuration="2s" //String: Length of animation
           size={size()} // Number: Defines the size of the circle.
           lineWidth={20} // Number: Defines the thickness of the circle's stroke.
           progress={firstfirst()} // Number: Update to change the progress and percentage.
           progressColor="#0063B6"  // String: Color of "progress" portion of circle.
           bgColor= {isDarks(props)}// String: Color of "empty" portion of circle.
           textColor={isDarks(props)} // String: Color of percentage text color.
           />
           <CircleP>Distinction*</CircleP>
           </div>
         
           <div style = {item}>
        <Circle 
           animate={true} // Boolean: Animated/Static progress
           animationDuration="2s" //String: Length of animation
           size={size()} // Number: Defines the size of the circle.
           lineWidth={20} // Number: Defines the thickness of the circle's stroke.
           progress={firstsecond()} // Number: Update to change the progress and percentage.
           progressColor="#0063B6"  // String: Color of "progress" portion of circle.
           bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
           textColor={isDarks(props)} // String: Color of percentage text color.
           />
           <CircleP>Distinction*</CircleP>
           </div>
            

           <div style = {item}>
        <Circle 
           animate={true} // Boolean: Animated/Static progress
           animationDuration="2s" //String: Length of animation
           size={size()} // Number: Defines the size of the circle.
           lineWidth={20} // Number: Defines the thickness of the circle's stroke.
           progress={firstthird()} // Number: Update to change the progress and percentage.
           progressColor="#0063B6"  // String: Color of "progress" portion of circle.
           bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
           textColor={isDarks(props)} // String: Color of percentage text color.
           />
           <CircleP>Distinction</CircleP>
           </div>
          
            </ContainerOne>


         )
            
}};     






const secondCircle = () => {
  if (secondClick ==false){
      return( 
          <ContainerTwo ref = {isInView}>        
      <div style = {item}>
         <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={secondFirst()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
         <CircleP>Engineering Practice</CircleP>
         </div>
       
         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={secondSecond()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
         <CircleP>Engineering Mathematics</CircleP>
         </div>
          

         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={secondThird()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
           <CircleP>Analogue and Digital 1</CircleP>
 </div>


<div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={secondForth()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
         <CircleP>Analogue and Digital 2</CircleP>
         </div>


         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={secondFith()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
         <CircleP>Introduction to Electrical Engineering</CircleP>
         </div>



         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={secondSix()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
                 <CircleP>Embedded Systems</CircleP>
         </div>


      
          </ContainerTwo>


       )
          
}};   



const thirdCircle = () => {
  if (thirdClick ==false){
      return( 
          <ContainerTwo ref = {isInView}>        
      <div style = {item}>
         <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={thirdFirst()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
             <CircleP>Computing Industry</CircleP>
         </div>
       
         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={thirdSecond()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
          <CircleP>Web Development</CircleP>
         </div>
          

         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={thirdThird()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
         <CircleP>Artificial Intelligence</CircleP>
         </div>



         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={thirdFourth()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
         <CircleP>Computing Technologies</CircleP>
         </div>




         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={thirdFith()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />  <CircleP>Cyber Security</CircleP>
         </div>



         <div style = {item}>
      <Circle 
         animate={true} // Boolean: Animated/Static progress
         animationDuration="2s" //String: Length of animation
         size={size()} // Number: Defines the size of the circle.
         lineWidth={20} // Number: Defines the thickness of the circle's stroke.
         progress={thirdSix()} // Number: Update to change the progress and percentage.
         progressColor="#0063B6"  // String: Color of "progress" portion of circle.
         bgColor={isDarks(props)} // String: Color of "empty" portion of circle.
         textColor={isDarks(props)} // String: Color of percentage text color.
         />
          
          <CircleP>Programming</CircleP>
         </div>
     
          </ContainerTwo>


       )
          
}};   


      

     
     

    return ( 
        <section id = "PageTemp">
              <Wrapper clicked = {props.isDark}>
              {props.isVisible ? (
                <Fade>
                    <Heading><Blue>&lt;</Blue>qualifications<Blue>/&gt;</Blue></Heading>
                    <div className="animate__animated animate__zoomIn" >
                    <Img src="Qualifications/Btech-Computer-Science-removebg-preview.png" alt="" />
                    </div>

                    <Grades style={firstStyle}><Text>Electronic and Electrical Engineering (level 3) 
                    {firstCircle()}</Text><Button onClick = {firstButton}>{downLink}</Button></Grades>
                    <Grades style={secondStyle}><Text>Electronic and Electrical Engineering (level 4 (university first year))  {secondCircle()}</Text><Button onClick = {secondButton}>{downLink}</Button></Grades>
                    <Grades style={thirdStyle}><Text>Computer Science (level 4 (university first year)) {thirdCircle()}</Text><Button onClick={thirdButton}>{downLink}</Button></Grades>
            






                </Fade>
            
              ) : <p></p>}

              </Wrapper>

        </section>
    )}

export default Qualifications;



const Grades = styled.div`


border: 5px #0063B6 solid;
height: 7em;
width: 90%;
margin-left:auto;
margin-right:auto;
margin-top: 1em;
border-radius:15px;

`;


const Text = styled.p`
font-size:2em;
text-align:center;



@media (max-width: 1023px){
    font-size:1em;
    padding-left: 5px;
    padding-right: 5px;
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


const Button = styled.button`
margin-left:auto;
margin-right:auto;
display:block;
border:none;
border-radius:20px;
width:2em;
height:2em;
background-color: #0063B6;

`;


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
margin-left:auto;
margin-right:auto;
width: 20em;
margin-top:2.5em;
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;

@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-16px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-16px); }
}

@media (max-width: 1023px){
    margin-top: 5em;
    width: 35%;
    min-width: 150px;
  }

`;






const CircleP = styled.p `
font-size: 0.7em;


`;


const ContainerOne = styled.div`
width : 6em;
    height : 7em;
    display:grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    justify-content:center;

`;


const ContainerTwo = styled.div`
  
  display:grid;
  margin :auto;
  grid-template-columns: repeat(6, 1fr);
  justify-content:center;


  @media (max-width: 1023px){
    grid-template-columns: repeat(3, 1fr);
    height: 15em;
  }

  

 
   `;
  