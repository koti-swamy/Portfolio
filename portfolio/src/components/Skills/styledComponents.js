import styled from "styled-components";

export const SkillsBg=styled.div`
height:100vh;
width:100vw;
margin:none;
padding:none;
`

export const SkillCard=styled.div`
display:flex;
align-items:center;
`

export const CertificateImg=styled.img`
height:80vh;
width:100%;

`

export const SkillContainer=styled.div`
height:90vh;

padding:30px;
margin-bottom:0px;
background-color:${props => props.isDarkMode?"#383333":"#F8FAFC"};
`