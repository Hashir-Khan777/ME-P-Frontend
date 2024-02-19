import React from "react";
import { ContainerDiv, ParentDiv } from "./style";

const ShippingMethod = () => {
  return (
    <>
      <ContainerDiv>
        <ParentDiv>
          <div>
            <p style={{ fontSize: "22px", margin: "0px 0px", fontWeight:'600', letterSpacing:'2%' }} className="heading">
              Shipping Method
            </p>
          </div>
          <br />
          <div className="shippingclass">
            <div className="marginbottom">
              <p>
                {" "}
                <span style={{fontWeight:'600'}}>Arrives by Monday, June 7</span>
              </p>
            </div>
            <div className="justifybtw">
              <div>
                <p>
                {" "}
                <span style={{fontWeight:'600'}}>Delivery Charges</span>
              </p>
              <p className="greycol">
                <small>Additional fess may apply</small>
              </p>
              </div>
              <div>
                <p><span style={{fontWeight:'600'}}>$5.00</span></p>
                </div>
            </div>
          </div>
          <div className="marginbottom">
            <br />
            <br />
          </div>
          <br />
        </ParentDiv>
      </ContainerDiv>
    </>
  );
};

export default ShippingMethod;
