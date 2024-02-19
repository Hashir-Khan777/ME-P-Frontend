import React from "react";
import { Default } from "react-toastify/dist/utils";
import { BrowseButton, Containerdiv, FlexCard, FlexParent, Styledbutton } from "./style";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import location from "../../assets/Location.png";

const PopularParts = () => {


const cardObj = [
    {
        id:1,
        img: f1
    },
    {
        id:2,
        img: f2
    },
    {
        id:3,
        img: f3
    },
    
]

  return (
    <>
      <Containerdiv>
        <div>
          <h1>
            <span className="styledblack"> Popular </span>
            <span className="styledYellow"> Parts : </span>
          </h1>
        </div>

        <div>
          <FlexParent>

            {cardObj.map((e)=>{
                    return(
                        <FlexCard key={e.id}>
              <div className="bgyellow">
                <p>Clifton Karachi, Pakistan</p>
              </div>

              <div className="imgclass">
                <img src={e.img} alt="f1" />
              </div>
              <div className="justifybtn">
                <div>
                 
                 
                  <span>
                    <b>Engine</b>
                  </span>
                </div>{" "}
                <div>
                  
                  <span>
                    <b>$</b> <b className="yellowcolor">46000</b>
                  </span>
                </div>
              </div>
              <div className="para pad">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
              </div>

              
              <div>
                {" "}
                <Styledbutton><b>EXPLORE</b></Styledbutton>
              </div>
            </FlexCard>
                    )
            })}
            <BrowseButton> <button className="styledbutton">BROWSE PARTS</button></BrowseButton>
          </FlexParent>
        </div>
      </Containerdiv>
    </>
  );
};
export default PopularParts;
