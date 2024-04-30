import React from "react";
import footerlogo from "../../assets/footerLogo.png";
import sm1 from "../../assets/sm1.png";
import sm2 from "../../assets/sm2.png";
import sm3 from "../../assets/sm3.png";
import sm4 from "../../assets/sm4.png";
import payment1 from "../../assets/payment1.png";
import payment2 from "../../assets/payment2.png";
import payment3 from "../../assets/payment3.png";
import payment4 from "../../assets/payment4.png";
import { FlexParent, FlexParent1, FlexParent2, ParentContainer } from "./style";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <ParentContainer>
        <div className="sm:max-w-[80%] max-w-[90%] block m-auto">
          <FlexParent className="fontsize">
            <div>
              <p>
                <img className="logoimg" src={footerlogo} alt="logo" />
              </p>
            </div>
            <div>
              <p>
                131 Dartmouth St, 3rd Floor, Boston, MA 02116{" "}
              </p>
            </div>
            <div className="lg:flex hidden">
              <p>
                /
              </p>
            </div>
            <div>
              <p>
                +92 3128456911
              </p>
            </div>
            <div className="lg:flex hidden">
              <p>
                /
              </p>
            </div>
            <div>
              <p>info@ME&P.com</p>
            </div>
            <div className="flex m-auto sm:m-0 sm:mt-0 mt-[6px]">
              <img className="SocialMedia" src={sm1} alt="sm1" />
              <img className="SocialMedia" src={sm2} alt="sm2" />
              <img className="SocialMedia" src={sm3} alt="sm3" />
              <img className="SocialMedia" src={sm4} alt="sm4" />
            </div>
          </FlexParent>
          <div className="line">
            <hr />
          </div>

          <FlexParent1 className="fontsize">
            <div className="flexChild" >
              <p className="yellow"> EQUIPMENT </p>
              <p> Excavators </p>
              <p> Dozers </p>
              <p> Cranes </p>
              <p> Loaders </p>
              <p> Asphalt, Pavers & Concrete </p>
              <p> Roller Compactor </p>
              <p> Dredger </p>
            </div>
            <div className="flexChild">
              <p className="yellow"> FOR RENT </p>
              <p> Excavators </p>
              <p> Dozers </p>
              <p> Cranes </p>
              <p> Loaders </p>
              <p> Asphalt, Pavers & Concrete </p>
              <p> Roller Compactor </p>
              <p> Dredger </p>
            </div>

            <div className="flexChild">
              <p className="yellow"> PARTS </p>
              <p> All Equipment Parts </p>
              <p> Engine </p>
              <p> Hydraulic pumps </p>
              <p> Filters </p>
            </div>

            <div className="flexChild">
              <p className="yellow"> QUICK LINKS </p>
              <p> About us </p>
              <p> Contact </p>
              <Link className="linkstyled" to={"/PrivacyPolicy"}>
                <p> Privacy Policy </p>
              </Link>
              <p> Terms & Conditions </p>
              <p> Login / Sign up </p>
            </div>
          </FlexParent1>
          <div className="line">
            <hr />
          </div>

          <FlexParent2>
            <div>
              <p className="sn:text-[1rem] text-[12px]">2023 Copyright © ME&P.com</p>
            </div>
            <div className="flex flex-wrap">
              <img src={payment1} alt="payment1" />
              <img src={payment2} alt="payment2" />
              <img src={payment3} alt="payment3" />
              <img src={payment4} alt="payment4" />
            </div>
          </FlexParent2>
        </div>
      </ParentContainer>
    </>
  );
};

export default Footer;
