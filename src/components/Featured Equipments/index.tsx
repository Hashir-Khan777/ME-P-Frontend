import React from "react";
import { Default } from "react-toastify/dist/utils";
import { BrowseButton, Containerdiv, FlexCard, FlexParent, Styledbutton } from "./style";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import location from "../../assets/Location.png";

const FeaturedEqp = () => {


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
    {
        id:4,
        img: f1
    },
    {
        id:5,
        img: f2
    },
    {
        id:6,
        img: f3
    },
]

  return (
    <>
      <Containerdiv>
        <div>
          <h1>
            <span className="styledblack">Featured </span>
            <span className="styledYellow"> Equipments :</span>
          </h1>
        </div>

        <div>
          <FlexParent>
            {cardObj.map((e)=>{
                    return(
                        <FlexCard key={e.id}>
              <div className="justifybtn">
                <div>
                  {" "}
                  <div className="alignboth">
                    <p className="greycolor">
                      {" "}
                      <img src={location} alt="location" />
                    </p>
                    <p style={{ fontSize: "small" }}>
                      Clifton Karachi, Pakistan
                    </p>
                  </div>
                  <p>
                    <b>3 Ton Excavator</b>
                  </p>
                </div>{" "}
                <div>
                  <br />
                  <p>
                    <b>$</b> <b className="yellowcolor">46000</b>
                  </p>
                </div>
              </div>

              <div className="imgclass">
                <img src={e.img} alt="f1" />
              </div>

              <div className="justifybtn pad">
                <div>
                  <p className="yellowcolor" style={{fontWeight:'600'}}>WEIGHT</p>
                  <p>
                    <b>5,842 lbs</b>
                  </p>
                </div>
                <div className="borderLeft">
                  <p className="yellowcolor" style={{fontWeight:'600'}}>ENGINE POWER</p>
                  <p>
                    <b>20 hp</b>
                  </p>
                </div>
                <div className="borderLeft">
                  <p className="yellowcolor" style={{fontWeight:'600'}}>DIG DEPTH</p>
                  <p>
                    <b>9 ft 12 in</b>
                  </p>
                </div>
              </div>

              
              <div>
                {" "}
                <Styledbutton><b>EXPLORE</b></Styledbutton>
              </div>
            </FlexCard>
                    )
            })}
            <BrowseButton> <button className="styledbutton">BROWSE EQUIPMENT</button></BrowseButton>
          </FlexParent>
        </div>
      </Containerdiv>
    </>
  );
};
export default FeaturedEqp;
