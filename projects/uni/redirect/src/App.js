import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Typed from "react-typed"

function App() {
  return (
    <div className="App">
      <Img src= 'correct.png' />
      <h2>Thank you for getting in touch! <br/> We'll get back to you as soon as we can.</h2>
      <Link href="https://minas.org.uk/index/">Back to the Website</Link>

    </div>
  );
}

export default App;


const Img = styled.img`
width: 15em;
margin-top: 1em;
`;

const Link = styled.a`
color: #0063B6;

`;

