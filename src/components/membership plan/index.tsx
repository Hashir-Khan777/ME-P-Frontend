import React from "react";
import { FlexCard, FlexParent } from "./style";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import fbp from "../../assets/fbp.png";
import xp from "../../assets/xp.png";
import instap from "../../assets/instap.png";
import lindedinp from "../../assets/linkedinp.png";
import rocket from "../../assets/rocket.png";
import points from "../../assets/points.png";
import blackpoint from "../../assets/blackpoint.png";
import { Link } from "react-router-dom";

const MembershipPlan = () => {
  const cardObj = [
    {
      id: 1,
      title: "Starter",
      price: "$15 per month",
      point: points,
      bg: "#ffffff",
    },
    {
      id: 2,
      title: "Premium",
      price: "$15 per month",
      point: points,
      bg: "#ffffff",
    },
    {
      id: 3,
      title: "Corporate",
      price: "$15 per month",
      point: blackpoint,
      bg: "#FFC322",
      bg1: "white",
      bg2: "black",
    },
    {
      id: 4,
      title: "Enterprise",
      price: "$15 per month",
      point: points,
      bg: "#ffffff",
    },
  ];

  return (
    <>
      <FlexParent>
        {cardObj.map((e) => {
          return (
            <div key={e.id}>
              <FlexCard style={{ backgroundColor: e.bg }}>
                <div className="justifybtn">
                  <div>
                    <div>
                      <h1>{e.title}</h1>
                      <p>
                        <small>{e.price}</small>
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={rocket} alt="rocket" />
                  </div>
                </div>
                <br />
                <div className="pwidth">
                  <p className="sml">
                    {" "}
                    <img src={e.point} alt="points" /> Address latest comments
                  </p>
                </div>
                <div className="pwidth">
                  <p className="sml">
                    {" "}
                    <img src={e.point} alt="points" /> Address latest comments
                  </p>
                </div>
                <div className="pwidth">
                  <p className="sml">
                    {" "}
                    <img src={e.point} alt="points" /> Address latest comments
                  </p>
                </div>
                <div className="pwidth">
                  <p className="sml">
                    {" "}
                    <img src={e.point} alt="points" /> Address latest comments
                  </p>
                </div>
                <div>
                  <Link to="/createstore">
                    <button style={{ backgroundColor: e.bg1 }}>
                      <b>Get Started</b>
                    </button>
                  </Link>
                </div>
                <div></div>
              </FlexCard>
            </div>
          );
        })}
      </FlexParent>
    </>
  );
};
export default MembershipPlan;
