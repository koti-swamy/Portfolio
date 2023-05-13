import PortFolioContext from "../../PortfolioContext"

import Header from "../Header"

import {ProjectsBg,ProjectsCard,ProjectItemCard,ProjectImg,ProjectDesc,ProjectWebsite} from "./styledComponents"

const Projects=()=>(
    <PortFolioContext.Consumer>
        {value=>{
            const{isDarkMode}=value

            const jobbyUrl=isDarkMode?"https://ik.imagekit.io/2hr3fdaa9/Portfoilio_project_images/jobbydark.png?updatedAt=1683114292558":"https://ik.imagekit.io/2hr3fdaa9/Portfoilio_project_images/jobbylight.png?updatedAt=1683114292562"

            const youtubeUrl=isDarkMode?"https://ik.imagekit.io/2hr3fdaa9/Portfoilio_project_images/youtubedark.png?updatedAt=1683114292451":"https://ik.imagekit.io/2hr3fdaa9/Portfoilio_project_images/youtubelight.png?updatedAt=1683114292842"

            const tastyKitchensUrl=isDarkMode?"https://ik.imagekit.io/2hr3fdaa9/Portfoilio_project_images/tastykitchendark.png?updatedAt=1683114292566":"https://ik.imagekit.io/2hr3fdaa9/Portfoilio_project_images/tastykitchenlight.png?updatedAt=1683114292572"

            return(
                <ProjectsBg>
                    <Header />
                    <ProjectsCard isDarkMode={isDarkMode}>
                        <ProjectItemCard>
                            <ProjectImg src={jobbyUrl} alt="pojectLogo" />
                            <ProjectDesc isDarkMode={isDarkMode}>find the right job or internship, connect and strengthen professional relationships, and learn the skills you need to succeed in your career.</ProjectDesc>
                            <ProjectWebsite href="#" target="_blank" >Visit Website</ProjectWebsite>
                        </ProjectItemCard>
                        <ProjectItemCard>
                            <ProjectImg src={youtubeUrl} alt="pojectLogo" />
                            <ProjectDesc isDarkMode={isDarkMode}>YouTube is a website designed for sharing video. Millions of users around the world have created accounts on the site that allow them to upload videos that anyone can watch</ProjectDesc>
                            <ProjectWebsite href="#" target="_blank" >Visit Website</ProjectWebsite>
                        </ProjectItemCard>
                        <ProjectItemCard>
                            <ProjectImg src={tastyKitchensUrl} alt="pojectLogo" />
                            <ProjectDesc isDarkMode={isDarkMode}>Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants.</ProjectDesc>
                            <ProjectWebsite href="#" target="_blank" >Visit Website</ProjectWebsite>
                        </ProjectItemCard>
                    </ProjectsCard>
                </ProjectsBg>
            )
        }}
    </PortFolioContext.Consumer>
)

export default Projects