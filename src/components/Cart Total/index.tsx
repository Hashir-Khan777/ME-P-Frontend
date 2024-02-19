import React from "react";
import { CHildFlex, ContainerDiv, FlexBet, ParentFlex } from "./style";

const CartTotal = () => {
  return (
    <>
      <ContainerDiv>
        <ParentFlex>
          <CHildFlex>
            <p>Discount Codes</p>
            <p className="greycol">
              <small>Enter your coupon code if you have one</small>
            </p>
            <div className="row">
              <input type="text" />{" "}
              <button className="cupon">Apply Coupon</button>
            </div>
            <div>
              <button className="customButton">Continue Shopping</button>
            </div>
          </CHildFlex>
          <CHildFlex >
            <div>
              <FlexBet>
                <div>
                  <p>Sub Total </p>
                </div>
                <div>
                  <p>$4600 </p>
                </div>
              </FlexBet>
              <FlexBet>
                <div>
                  <p>Shipping </p>
                </div>
                <div>
                  <p>$100</p>
                </div>
              </FlexBet>
              <FlexBet>
                <div>
                  <p style={{fontWeight:'600'}}><>Grand Total </> </p>
                </div>
                <div>
                  <p style={{fontWeight:'600'}}> <> $4700</></p>
                </div>
              </FlexBet>
            </div>
            <div>
                <br />
              <hr />
            </div>
            <div>
              <button className="proceed">Proceed To Checkout</button>
            </div>
          </CHildFlex>
        </ParentFlex>
      </ContainerDiv>
    </>
  );
};
export default CartTotal;
