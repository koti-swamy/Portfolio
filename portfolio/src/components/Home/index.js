import Header from "../Header"

import {HomeBg,HomeCard,HomeName,HomeDesignation,HomeWork,HomeConnectBtn} from "./styledComponents"

import PortFolioContext from "../../PortfolioContext"

const Home =()=>(
    <PortFolioContext.Consumer>
        {value=>{
            const{isDarkMode}=value
            return(
                <HomeBg isDarkMode={isDarkMode}>
                    <Header />
                    <HomeCard isDarkMode={isDarkMode}>
                        <HomeName isDarkMode={isDarkMode} >Hi, my name is Y.P.Kotiswamy.</HomeName>
                        <HomeDesignation isDarkMode={isDarkMode}>I'm a fullstack developer.</HomeDesignation>
                        <HomeWork isDarkMode={isDarkMode}> I work with both the frontend and backend of a website or application.</HomeWork>
                        <HomeConnectBtn isDarkMode={isDarkMode} href="https://www.linkedin.com/in/priyankara-kotiswamy-yakkala-1955a4264/" target="_blank" >Let's connect!</HomeConnectBtn>
                    </HomeCard>
                </HomeBg>
            )
        }}
    </PortFolioContext.Consumer>
)

export default Home