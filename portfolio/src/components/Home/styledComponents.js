import styled  from "styled-components";

export const HomeBg=styled.div`
height:100vh;
`

export const HomeCard=styled.div`
background-color:${props => props.isDarkMode?"#383333":"#F8FAFC"};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:90vh;
font-family:cursive;
`

export const HomeName=styled.p`
color:${props => props.isDarkMode?"white":"black"};
margin-bottom:15px;
font-size:40px;
`

export const HomeDesignation=styled.p`
color:${props => props.isDarkMode?"#FF0392":"#F7931E"};
margin-bottom:15px;
font-size:34px;
`

export const HomeWork=styled.p`
color:${props => props.isDarkMode?"lightblue":"grey"};
margin-bottom:15px;
font-size:15px;
`

export const HomeConnectBtn=styled.a`
color:white;
text-decoration:none;
border-radius:6px;
height:30px;
width:130px;
background-color:${props => props.isDarkMode?"#FF0392":"#F7931E"};
display:flex;
justify-content:center;
align-items:center;
`