import { Link } from "react-router-dom";

import PortFolioContext from "../../PortfolioContext";

import {BsFillBrightnessHighFill} from "react-icons/bs"

import {MdDarkMode} from "react-icons/md"

import {HeaderBg,LogoCard,Img,HeaderNavCard,ThemeCard,NavPara} from "./styledComponents"

import "./index.css"

const Header =(props)=>(
    
    <PortFolioContext.Consumer>
        {
            (value)=>{
                const {isDarkMode,onTheme}=value

                const logoUrl =isDarkMode?"https://ik.imagekit.io/2hr3fdaa9/darkmode.png?updatedAt=1683040092188":"https://ik.imagekit.io/2hr3fdaa9/lightmode.png?updatedAt=1683040106298"

                const themeIcon=isDarkMode? <BsFillBrightnessHighFill />:<MdDarkMode />
                return(
                    <HeaderBg isDarkMode={isDarkMode}>
                        <LogoCard isDarkMode={isDarkMode}>
                        <Link to="/" className="link-style" >
                            <Img src={logoUrl} alt="portfolio-logo" />
                        </Link>
                        </LogoCard>
                        <HeaderNavCard>
                            <ThemeCard isDarkMode={isDarkMode} onClick={onTheme}>
                                {themeIcon}
                            </ThemeCard>
                            <Link to="/" className="link-style" >
                                <NavPara isDarkMode={isDarkMode}>Home</NavPara>
                            </Link>
                            <Link to="/skills" className="link-style" >
                                <NavPara isDarkMode={isDarkMode}>Skills</NavPara>
                            </Link>
                            <Link to="/projects" className="link-style" >
                                <NavPara isDarkMode={isDarkMode}>Projects</NavPara>
                            </Link>
                            <Link to="/contact" className="link-style" >
                                <NavPara isDarkMode={isDarkMode}>Contact</NavPara>
                            </Link>
                        </HeaderNavCard>
                    </HeaderBg>
                )
            }
        }
    </PortFolioContext.Consumer>
)

export default Header