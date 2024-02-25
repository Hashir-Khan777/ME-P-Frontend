import React from "react";
import { FlexChild1, FlexChild2, ParentFlex, Styleddiv } from "./style";
import circle from "../../assets/circle.png";
import whyStarted from "../../assets/whyStarted.png";

const WhyStarted = () => {
  return (
    <>
      <Styleddiv>
        <ParentFlex>
          <FlexChild2>
            <img src={whyStarted} alt="whyStarted" />
            <div className="shape">
              <img src={circle} alt="circle" />
            </div>
          </FlexChild2>
          <FlexChild1>
            <h1>
              Why we started this
              <span className="styledyellow">
                {" "} Platform
              </span>

            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className="small-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                i ut aliquip ex ea commodo consequat. Duis aute irureiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                i ut aliquip ex ea commodo consequat. Duis aute irureiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nise dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </FlexChild1>
        </ParentFlex>
      </Styleddiv>
    </>
  );
};

export default WhyStarted;
