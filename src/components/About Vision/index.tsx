import React from "react";
import { FlexChild1, FlexChild2, ParentFlex, Styleddiv } from "./style";
import bar from "../../assets/bar.png"

const AboutVision = () => {
  return (
    <>
      <Styleddiv>        
        <ParentFlex>
          <FlexChild1>
            <p className="styledyellow">
              Our mission
            </p>
            <h1>Best Platform to Buy & Sell Construction Vehicles</h1>
            <p className="styledGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
            
          </FlexChild1>
          <FlexChild2>
            <p className="styledyellow">
              Our Vision
            </p>
            <h1>A platform that empowers individuals to improve</h1>
            <p className="styledGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
            </p>
            <br />
            
          </FlexChild2>
        </ParentFlex>
      </Styleddiv>
      
    </>
  );
};

export default AboutVision;
