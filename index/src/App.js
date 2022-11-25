import React , {useState , useRef , useEffect}from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Home from './Components/home';
import { useInView } from 'react-intersection-observer';
import About from './Components/about';
import AboutPhone from './Components/aboutPhone';
import Projects from './Components/projects';
import styled from 'styled-components';
import Qualifications from './Components/qualifications';
import Contact from './Components/contact';






function App(){


//Update state when the darkModeButton is Clicked
//Default true because dark is default
  let [ isClicked, setIsClicked] = useState(true);

  const handelDarkMode = () => {
    if (isClicked === true){
        isClicked = false; 
    }else{
        isClicked = true; 
    }
    setIsClicked(isClicked);
  }

  const openInNewTab = url => {
    window.open(`https://minas.org.uk/${url}` ,'_blank');
  };

  const slides  = [
    {name :"one" , url : "bankATM.png", id : 0  },
    {name :"two" , url : "tesla.png" , id:1  },
    {name :"three" , url : "group.png" , id : 2 },
]


  
 let navItemP =  [
   {name : "home", isActive:false },
   {name : "about-me", isActive : false},
   {name : "menu", isActive : false},
   {name : "qualifications", isActive : false},
   {name : "contact", isActive : false }];

   let navItem =  [
    {name : "home", isActive:false },
    {name : "about", isActive : false},
    {name : "menu", isActive : false},
    {name : "qualifications", isActive : false},
    {name : "contact", isActive : false }];
  
  //Checks if about is visable
  const { ref: homeV, inView: homeIsVisible } = useInView();


   //Checks if about is visable
   const { ref: aboutV, inView: aboutIsVisible } = useInView();

   //Checks if projects is visable
   const { ref: projectsV, inView: projectsIsVisible } = useInView();

      //Checks if projects is visable
      const { ref: aboutPV, inView: aboutPhoneIsVisible } = useInView();


        //Checks if qualification is visable
        const { ref: qualificationV, inView: qualificationIsVisible } = useInView();

        const { ref: contactV, inView: contactIsVisible } = useInView();


        const isContactVisable = () =>{
          let contact = ( contactIsVisible? true: false);
          return contactIsVisible;
        }

        const isqualificationIsVisible = () =>{
          let projects = (qualificationIsVisible ? true: false);
          return projects;
        } 
     
   const isAboutPhoneVisable = () =>{
    let projects = (aboutPhoneIsVisible ? true: false);
    return projects;
  } 

   const isProjectsVisable = () =>{
    let projects = (projectsIsVisible ? true: false);
    return projects;
  }
   
   const isAboutVisable = () =>{
     let about = (aboutIsVisible ? true: false);
     return about;
   }

   const isHomeVisable = () =>{
    let home = (homeIsVisible ? true: false);
    return home;
  }
 
  
  
   
    
  return(
    <div className="App">
        <NavBar  darkMode = {handelDarkMode} isDark = {isClicked} navItem = {navItem} navItemP = {navItemP}/>
        
        <div id = "home" className = "section" ref = {homeV}>
        
          <Home  isDark = {isClicked} isVisible ={isHomeVisable()}/> 
        </div>
        <div id = "about" className = "section phone" ref = {aboutV}>
          <About   isDark = {isClicked} isVisible ={isAboutVisable()}/>
        </div>
        <div id = "about-me" className = "section desktop" ref = {aboutPV}>
          <AboutPhone  isDark = {isClicked} isVisible ={isAboutPhoneVisable()}/>
        </div>
  
        <div id = "menu" className = "section" ref = {projectsV}>
          <ProjectsDiv>
          <Projects slides={slides} isDark = {isClicked} isVisible ={isProjectsVisable()}/>
          </ProjectsDiv>
        </div>

        <div id = "qualifications" className = "section" ref = {qualificationV}>
          <ProjectsDiv>
          <Qualifications slides={slides} isDark = {isClicked} isVisible ={isqualificationIsVisible()}/>
          </ProjectsDiv>
        </div>


        <div id = "contact" className = "section" ref = {contactV}>
          <Contact slides={slides} isDark = {isClicked} isVisible ={isContactVisable()}/>
        </div>

  
     
    </div>)

}
 

export default App;


const ProjectsDiv = styled.div`
  width: 100%;

margin : 0 auto;

`;

