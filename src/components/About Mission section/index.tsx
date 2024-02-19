import React from "react";
import { FlexChild1, FlexChild2, ParentFlex, Styleddiv } from "./style";
import bar from "../../assets/bar.png"

const AboutMission = () => {
  return (
    <>
      <Styleddiv>
        <span><p><img src={bar} alt="bar" /></p></span>
        <ParentFlex>
          <FlexChild1>
            <p>
              <b>ABOUT US</b>
            </p>
            <h1>We are a community of enthusiasts who share their learnings</h1>
            <p className="styledGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="styledyellow">
              <b>{`Read More >`}</b>
            </p>
          </FlexChild1>
          <FlexChild2>
            <p className="styledyellow">
              <b>ABOUT US</b>
            </p>
            <h1>We are a community of enthusiasts who share their learnings</h1>
            <p className="styledGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <br />
            <br />
          </FlexChild2>
        </ParentFlex>
      </Styleddiv>
      
    </>
  );
};

export default AboutMission;
