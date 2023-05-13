import Header from "../Header"

import {AiOutlineWhatsApp} from "react-icons/ai"

import PortFolioContext from "../../PortfolioContext";

import {ContactBg,ContactCard,ContactInfo} from "./styledComponents"

import "./index.css"

const Contact =()=>(
    <PortFolioContext.Consumer>
        {value=>{
            const{isDarkMode}=value
            return (
                <ContactBg isDarkMode={isDarkMode}>
                    <Header />
                    <div className="contact-div">
                    <ContactCard isDarkMode={isDarkMode}>
                        <ContactInfo>Name : Y.P.Kotiswamy</ContactInfo>
                        <ContactInfo>Phone : +91-7013188047<AiOutlineWhatsApp className="icon-style" /></ContactInfo>
                        <ContactInfo>Email : swamy61802@gmail.com</ContactInfo>
                    </ContactCard>
                    </div>
                </ContactBg>
            )
        }}
    </PortFolioContext.Consumer>
)

export default Contact