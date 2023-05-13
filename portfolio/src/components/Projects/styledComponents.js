import styled from "styled-components";

export const ProjectsBg=styled.div`
height:100%;`

export const ProjectsCard=styled.div`
background-color:${props=>props.isDarkMode?"black":"white"};
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`

export const ProjectItemCard=styled.div`
width:800px;
border:1px solid lightblue;
border-radius:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:20px;
padding:15px;
`

export const ProjectImg=styled.img`
height:100px;
`

export const ProjectDesc=styled.p`
color:${props => props.isDarkMode?"white":"black"};
`

export const ProjectWebsite=styled.a`
color:white;
text-decoration:none;
border-radius:6px;
height:30px;
width:130px;
background-color:lightblue;
display:flex;
justify-content:center;
align-items:center;
`