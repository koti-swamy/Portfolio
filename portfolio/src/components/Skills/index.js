import Slider from "react-slick"

import Header from "../Header"

import PortFolioContext from "../../PortfolioContext"

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import {SkillsBg,SkillCard,CertificateImg,SkillContainer} from "./styledComponents"



const Skills =()=>(
    <PortFolioContext.Consumer>
        {
            value=>{
                const{isDarkMode}=value

                const settings={
                    dots:true,
                    infinite: true,
                    speed: 500,
                    slidesToShow:1,
                    slidesToScroll:1,
                    
                }

                return(
                    <SkillsBg >
                        <Header />
                        <SkillContainer isDarkMode={isDarkMode}>
                        <Slider {...settings}  >
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                            <SkillCard>
                                <CertificateImg src="https://res.cloudinary.com/djjtzlcrx/image/upload/v1683108322/Build_Your_Own_Responsive_Website_page-0001_v2eesv.jpg" alt="certififcate" />
                            </SkillCard>
                        </Slider>
                        </SkillContainer>
                    </SkillsBg>
                )
            }
        }
    </PortFolioContext.Consumer>
)

export default Skills