import React from "react";
import { FlexChild1, FlexChild2, ParentFlex, Styleddiv } from "./style";
import GrowthHands from "../../assets/growth-hands.png"
import shapes from "../../assets/shapes.png"

const OurTeam = () => {
  return (
    <>
      <Styleddiv>
        
        <ParentFlex>
          <FlexChild1>
            <h1 >
              <b>Our team of <span className="styledyellow"><b>creatives</b></span></b>
            </h1>
            <p style={{fontWeight:'600'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <p >
            <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</small>
            </p>
            <div className="shape"><img  src={shapes} alt="shapes" /></div>
          </FlexChild1>
          <FlexChild2>
           <img src={GrowthHands} alt="GrowthHands" />
            
          </FlexChild2>
        </ParentFlex>
        
      </Styleddiv>
      
    </>
  );
};

export default OurTeam;
