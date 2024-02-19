import React from "react";
import { ContainerDiv, ParentDiv } from "./style";

const ShippingAdress = () => {
  return (
    <>
      <ContainerDiv>
        <ParentDiv>
          <div>
            <p style={{fontSize:'22px',margin:'0px 0px', letterSpacing:'2%', fontWeight: ' 600'}} className="heading">Shipping Address</p>
            
          </div>
          <div>
            <span ><small >
              Select the address that matches your card or payment method
            </small> <br /></span>
            <br />
          </div>
          <div className="shippingclass">
            <div className="marginbottom">
             
            <p> <input type="radio" name="addressOption" id="sameBilling" /> <span style={{fontWeight:'600'}}>Same as Billing address</span></p>
            </div>
            <div>
              
            <p> <input type="radio" name="addressOption" id="differentShipping" /> <span style={{fontWeight:'600'}}>Use a different shipping address</span></p>

            </div>
          </div>
          <div className="marginbottom"><br /><br /></div>
          <br />
        </ParentDiv>
      </ContainerDiv>
    </>
  );
};

export default ShippingAdress;
