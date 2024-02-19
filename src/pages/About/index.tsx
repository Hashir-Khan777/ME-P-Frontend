import React from "react";
import AboutHeader from "../../components/About us header";
import OverView from "../../components/Overview";
import AboutVision from "../../components/About Vision";
import OurTeam from "../../components/Our team";
import WhyStarted from "../../components/why started";
import TeamCard from "../../components/Team Card";
import Sphere from "../../components/sphere";

const About = ()=>{

    return(
        <>
        <AboutHeader/>
        <OverView/>
        <AboutVision/>
        <OurTeam/>
        <WhyStarted/>
        <TeamCard/>
        <Sphere/>
        </>
    )
}
export default About