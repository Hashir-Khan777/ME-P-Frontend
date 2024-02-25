import React from "react";
import { ChildFlex, ChildFlex1, ParentFLex } from "./style";

const AboutHeader = () => {

    return (
        <>
            <ParentFLex>
                <ChildFlex>
                    <p>ABOUT US</p>
                    <h1>We are a team of enthusiasts who <br /> share their learnings</h1>
                </ChildFlex>
                <ChildFlex1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </ChildFlex1>
            </ParentFLex>
        </>
    )
}

export default AboutHeader;