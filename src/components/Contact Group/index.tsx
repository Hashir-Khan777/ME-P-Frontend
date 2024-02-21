import React from "react";
import { FlexCard, FlexParent } from "./style";
import Cphone from "../../assets/Cphone.png";
import Clocation from "../../assets/CLocation.png";
import Cflag from "../../assets/Cflag.png";
import fbp from "../../assets/fbp.png";
import xp from "../../assets/xp.png";
import instap from "../../assets/instap.png";
import lindedinp from "../../assets/linkedinp.png";

const ContactGroup = () => {
  const cardObj = [
    {
      id: 1,
      title: "Call Us 24/7",
      info: "+92 000000000",
      profile: Cphone,
      bg: "#F4F4F4",
      fcolor1: "black",
      fcolor2: "#616161",
    },
    {
      id: 2,
      title: "We are Here",
      info: "Islamabad, Pakistan",
      profile: Clocation,
      bg: "#FFBA3F",
      fcolor1: "white",
      fcolor2: "white",
    },
    {
      id: 3,
      title: "Write Us Anytime",
      info: "info@ME&P.com",
      profile: Cflag,
      bg: "#F4F4F4",
      fcolor1: "black",
      fcolor2: "#616161",
    },
  ];

  return (
    <>
      <FlexParent>
        {cardObj.map((e) => {
          return (
            <span key={e.id}>
              <FlexCard style={{ backgroundColor: e.bg }}>
                <div>
                  <img className="profileimg m-auto block" src={e.profile} width={40} alt="profile1" />
                </div>
                <div>
                  <h2 className="font-semibold text-xl" style={{ color: e.fcolor1 }}>{e.title}</h2>
                </div>
                <div>
                  <p style={{ color: e.fcolor2 }}>{e.info}</p>
                </div>
                <div></div>
              </FlexCard>
            </span>
          );
        })}
      </FlexParent>
    </>
  );
};
export default ContactGroup;
