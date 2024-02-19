import React, { useState } from "react";
import "./SellerHeader.css";
import profile1 from "../../assets/profile1.png";
import bellImg from "../../assets/bellImg.png";
import MyComponentProps from "../MyComponentProps";
import images from "../../utils/Images";

const SellerHeader = (props: MyComponentProps) => {
  const [notification, setNotificatin] = useState(false);
  return (
    <>
      <div className="headerContainer">
        <div className="header1">
          <div>
            <div className="ABCText">ABC STORE</div>
            <div className="equipmentText">{props.prop1}</div>
          </div>
          {notification === true && (
            <div className="natificationDiv">
              <div className="natificationDivChild">
                <div className="natificationDivChild1">
                  <img
                    src={images.chartGreen}
                    className="natificationDivChild1Img1"
                  />
                  <img
                    src={images.notification1}
                    className="natificationDivChild1Img2"
                  />
                  <span className="natificationDivChild1Text1">New Order</span>
                  <span className="natificationDivChild1Text2">
                    (Order ID: 005)
                  </span>
                </div>
                <div className="natificationDivChild2">2s</div>
              </div>
              <div className="natificationDivChild">
                <div className="natificationDivChild1">
                  <img
                    src={images.chatrRed}
                    className="natificationDivChild1Img1"
                  />
                  <img
                    src={images.notification2}
                    className="natificationDivChild1Img2"
                  />
                  <span className="natificationDivChild1Text1">
                    Order Canceled
                  </span>
                  <span className="natificationDivChild1Text2">
                    (Order ID: 004)
                  </span>
                </div>
                <div className="natificationDivChild2">1s</div>
              </div>
              <div className="natificationDivChild">
                <div className="natificationDivChild1">
                  <img
                    src={images.chartYellow}
                    className="natificationDivChild1Img1"
                  />
                  <img
                    src={images.notification3}
                    className="natificationDivChild1Img2"
                  />
                  <span className="natificationDivChild1Text1">
                    Order Canceled
                  </span>
                  <span className="natificationDivChild1Text2">
                    (Order ID: 005)
                  </span>
                </div>
                <div className="natificationDivChild2">1s</div>
              </div>
            </div>
          )}
          <div className="imgDiv">
            <img
              src={bellImg}
              className="bellImg"
              onClick={() => {
                setNotificatin(!notification);
              }}
            />
            <img src={profile1} className="profileImg" />
          </div>
        </div>
      </div>
    </>
  );
};
export default SellerHeader;
