import React from "react";
import { FlexChild1, FlexChild2, ParentFlex } from "./style";
import truck from "../../assets/truck.png"
import { Typography } from "@mui/material";
import SearchBar from "../Search Bar";

const HeroSection = ()=>{

    return(
        <>
        <ParentFlex>
        <FlexChild1>
        <h1>Accompany <br /> your journey</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        </FlexChild1>
        <FlexChild2>
            <img src={truck} alt="" />
        </FlexChild2>

        </ParentFlex>
        <SearchBar/>
        </>
    )
}

export default HeroSection;