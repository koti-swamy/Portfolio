import styled from "styled-components"

export const ContactBg=styled.div`
background-color:${props => props.isDarkMode?"#383333":"#F8FAFC"};
`

export const ContactCard=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    font-size:20px;
    border:2px solid lightblue;
    width:400px;
    height:200px;
    border-radius:6px;
    color:${props => props.isDarkMode?"white":"black"};
    font-family:cursive;
`

export const ContactInfo=styled.p`
display:flex;
align-items:center;

`