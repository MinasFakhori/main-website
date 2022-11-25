import React , {useState , useCallback} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import './../css/projects.css';



function Projects(props) {
    const [currentIndex , setCurrentIndex] = useState(0);


    const height = () =>{
   
        if (window.innerWidth >= 1023){
          return "35%";
        }else{
          return "20%";
        }
      }

    const slideStyle = {
        width : "75%",
        height : height(),
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius : "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage : `url(${props.slides[currentIndex].url})`
    }; 

  


    

    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.slides.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
     }

     const goToNext = () =>{
        const isLastSlide = currentIndex === props.slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
         setCurrentIndex(newIndex);
     }

   
    
        
    const openInNewTab = url => {
      window.open(`https://minas.org.uk/projects/${url}` ,'_self');
    };

   
    return ( 
        <section id = "projects">
              <Wrapper clicked = {props.isDark}>
           
                    <Heading><Blue>&lt;</Blue>projects<Blue>/&gt;</Blue></Heading>
                   
                    <SliderStyle>
                        <LeftArrow onClick= {goToPrevious}><Blue>&lt;</Blue></LeftArrow>
                        <RightArrow  onClick= {goToNext}><Blue>&gt;</Blue></RightArrow>
                        <div style={slideStyle}></div>       
                    </SliderStyle>
                
                  
                    <div className='grid'>
                  
                        <First className="cell" onClick = {() => openInNewTab("uni")} >Universty Work 🎓</First>
                        <Second className="cell"  onClick = {() => openInNewTab("https://minas.org.uk/projects/tutorials")}> Tutorials 📝</Second>
                        <Thrid className="cell"  onClick = {() => openInNewTab("https://minas.org.uk/projects/research")}>Research 📚</Thrid>
                        <Fourth className="cell">Hardware <Img src="Projects/arduino.svg" alt="" /></Fourth>
                        <Fifth className="cell">Linux <Img src = "Projects/linux-svgrepo-com.svg"/></Fifth>
                        <Six className="cell">Servers<Img src = "Projects/server-svgrepo-com.svg"/></Six>
                        <Seven className="cell">Python<Img src= "Projects/py-svgrepo-com.svg" /></Seven>
                        <Eight className="cell">Java <Img src = "Projects/java-svgrepo-com.svg" /></Eight>
                        <Nine className="cell">JavaScript<Img src ="Projects/js-svgrepo-com (1).svg" /> </Nine>
                        <Ten className="cell">Websites <Img src= "Projects/code-svgrepo-com.svg" /></Ten>
                        <Eleven className="cell">Mobile Apps 📱</Eleven>
                        <Twelve className="cell">CV <Img src = "Projects/cv-file-interface-symbol-svgrepo-com.svg" /></Twelve>

                        </div>
                          

                    
                    
              </Wrapper>

        </section>
    )}

export default Projects;

const Img = styled.img`
width: 25px;
margin-left: 4px;




`;


const First = styled.span `background-color:#4d61b9; padding-top:7%; color: white;  `;
const Second = styled.div` background-color: #6929a7; padding-top:7%; color: white;`;
const Thrid = styled.div`background-color: #bc4555; padding-top:7%; color: white;`;
const Fourth = styled.div`background-color: #d9705a; padding-top:7%; color: white; `;
const Fifth = styled.div`background-color: #894f62; padding-top:7%; color: white;`;
const Six = styled.div`background-color: #e1a20e; padding-top:7%; color: white;`;
const Seven = styled.div`background-color: #cc2b5e; padding-top:7%; color: white;`;
const Eight = styled.div`background-color: #06beb6 ; padding-top:7%;color:white;`;
const Nine = styled.div`background-color: #1d2060; padding-top:7%; color:white;`;
const Ten = styled.div`background-color: #56ab2f ; padding-top:7%;  color:white;`;
const Eleven = styled.div`background-color: red; padding-top:7%; color:white;`;
const Twelve = styled.div`background-color:#516395; padding-top:7%; color:white;`;




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




const SliderStyle = styled.div`
   height : 100%;
   position : relative;
   margin-top : 1em; 

`;











const RightArrow = styled.button`
     border:none;
     background: rgba(76, 175, 80, 0);
     display:block;
    position: absolute;
    top:17.6%;
    right:5%;
    transform : translate(0 , -50%);
    z-index:1;
    cursor: pointer;
    font-size:2em;

    @media (max-width: 1023px){
    top: 80px;
  }
    
`;


const LeftArrow = styled.button`
 background: rgba(76, 175, 80, 0);
 border:none;
 display:block;
    position: absolute;
    top:15%;
    left: 5%;
    font-size:2em;
    z-index:1;
    cursor: pointer;

    @media (max-width: 1023px){
    top: 60px;
  }

 

`;


