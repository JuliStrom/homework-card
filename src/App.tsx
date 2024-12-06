import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Card>
        <Box />
        <TextTitle>Headline</TextTitle>
        <TextParagraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</TextParagraph>
        <BoxBtn>
        <StyleBtn>See more</StyleBtn>
        <StyleBtn>Save</StyleBtn>
        </BoxBtn>
      </Card>
    </div>
  );
}

export default App;


const TextTitle = styled.h1`
font-weight: 700;
font-size: 16px;
color: #000;
text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
margin: 20px; 
`
const TextParagraph = styled.p`
font-weight: 500;
font-size: 12px;
line-height: 1.66667;
color: #abb3ba;
margin: 10px;
`
const StyleBtn = styled.button`
border: 2px solid #4e71fe;
border-radius: 5px;
width: 86px;
height: 30px;
cursor: pointer;
margin-left: 15px;

&:hover {
background: #4e71fe;
}
`


const Card = styled.div`
border-radius: 15px;
width: 300px;
height: 350px;
box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
background: #fff;
margin: 5rem auto;
font-family: "Inter", sans-serif;
display:block;
`

const Box = styled.img`
border-radius: 10px;
width: 280px;
height: 170px;
background: url("./assets/Rectangle1.png");
padding: 10px 10px 20px 10px;
`
const BoxBtn = styled.div`

padding-left: 20px;


StyleBtn + StyleBtn {
padding-left: 15px;
}
`