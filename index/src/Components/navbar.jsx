import React, { useState } from 'react';
import './../css/darkModeToggle.css';
import DarkMode from '../Components/Common/darkmode';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import "./../css/nav.css";
import {HiMenu} from 'react-icons/hi';
import Fade from 'react-reveal';
import {AiOutlineClose} from 'react-icons/ai';

function NavBar(props) {
    const navItemP = props.navItemP;
    const navItem = props.navItem;
    const darkMode = props.darkMode;


    const [hamburger , setHamburger] = useState(false);
   

    const isDark = () =>{
        let c = "";
        if(props.isDark === true){
            c = "navbar-dark bg-black"
        }else {
            c = "navbar-light bg-light"
        }return c ;
    }

    const icons = () =>{
        let c = "";
        if(props.isDark === true){
            c = "nav_icons/cover2.png"
        }else {
            c = "nav_icons/cover1.png"
        }return c ;
    }

    

    const isPage  = () => navItem.map(e => e.isActive ? <NavText key = {e.name}>{<Brackets>.</Brackets>}{e.name}{<Brackets>()</Brackets>}</NavText> : <NavText  key = {e.name}><A href={`#${e.name}`}>{<Brackets>&lt;</Brackets>}{e.name}{<Brackets>/&gt;</Brackets>}</A></NavText>)

    const phone = () =>  navItemP.map(e => <Fade down><div className='item'  key = {e.name}><A href={`#${e.name}`}>{<Brackets>&lt;</Brackets>}{e.name}{<Brackets>/&gt;</Brackets>}</A></div></Fade>)


    const open = <HiMenu className='hamburger' size='40px' color= {props.isDark ? "white" : "black"}/> 
  

    const close = <AiOutlineClose className='hamburger' size='40px' color= {props.isDark ? "white" : "black"}  /> 
   



    const clicked = () =>{
        setHamburger(!hamburger);
    }
        return (
            <React.Fragment>
                    <Nav className={`navbar fixed-top ${isDark()} `}>
                    
                    <Wrap darks = {props.isDark}>
                        <Logo src={icons()} alt="" />
                        {isPage()}
                    </Wrap>
                    


                    <Phone>
                    <div onClick={clicked} >
                        {hamburger ? close : open}
                        {hamburger ? <div className='nav-wrapper'> {phone()} </div> :<></>}
                        </div>
                        
                     
                
                        <PhoneImgLogo src={icons()} alt="" />
                        <Hidden darks = {props.isDark}>gggg</Hidden>
                    </Phone>
                    <DarkMode onDarkMode= {darkMode}/>
                </Nav>
                
             

               
            </React.Fragment>
        );
    }

 
export default NavBar;

const Nav = styled.nav`


@media (max-width: 1023px){
height: 5.5vh;
}
`;
const Hidden = styled.p`
color: ${props => (props.darks ? "black" : "white")};
`;
const Wrap = styled.div`
    color: ${props => (props.darks ? "white" : "black")};
    transition: 0.3s;
    display:block;
    margin-left:auto;
    margin-right:auto;
    max-width:100%;
    margin-bottom: 5px;
    
    @media (max-width: 1023px){
    display: none;
  }
`;





const PhoneImgLogo = styled.img`
  width: 3em;
  height:2vh;
  margin-top:0.8em;
  margin-bottom:5px;
`;




const Brackets = styled.span`
color: #0063B6;
`;

const Logo = styled.img`
width:3em;
position: absolute;
left:0.5em;
top:1em;


`;

const Phone = styled.div`

    display:flex;
    justify-content:space-between;
    width: 100%;
    margin-left:2%;
    margin-right:2%;
    margin-top: -5px;
    @media (min-width: 1023px){
    display: none;
  }

    `;



const NavText = styled.span`
     font-size : 14px;
     margin : 0 20px 0 20px;
     
     &:hover{
         background-color: grey;
         color : white;
         padding: 5px;
         border-radius: 5px;
         cursor: pointer;
         transition: 0.3s;
     }
`;




const A =styled.a`
color:inherit;
text-decoration: none;

:hover{
    color:inherit;
}

`;