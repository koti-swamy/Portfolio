import styled from "styled-components"
 

export const HeaderBg=styled.div`
background-color:${props => props.isDarkMode?"black":"white"};
height:10vh;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding-left:40px;
padding-right:40px;
font-family:Bree serif;
`

export const LogoCard=styled.div``

export const HeaderNavCard=styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

export const ThemeCard=styled.div`
cursor: pointer;
color:${props=>props.isDarkMode?"white":"black"};
font-size:25px;
`

export const Img=styled.img`
height:30px;
`

export const NavPara=styled.p`
color:${props=>props.isDarkMode?"white":"black"};
margin-left:15px;
`
