import { Helmet } from "react-helmet-async";
import Banner from "./banner";
import AboutDetails from "./about-details";
import AboutUsDetails from "./about-us-details";
import BenefitsOfWork from "./benefits-of-work";
import MissionVision from "./mission-vision";

export default function AboutUs() {
    return (
        <>
            <Helmet>
                <title>About Us | Entice – B2B Demand Generation Experts</title>
                <meta name="description" content="Learn more about Entice, a B2B demand generation agency combining data, creativity, and technology to help businesses connect with high-value prospects and accelerate growth." />
            </Helmet>
            <Banner />
            <AboutUsDetails />
            <BenefitsOfWork />
            <AboutDetails />
            <MissionVision />
            {/* <SalientFeatures /> */}
        </>
    )
}
