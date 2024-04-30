import React from "react";
import { ParentFlex } from "./style";

const MembershipHeader = () => {
  return (
    <>
      <ParentFlex>
        <div>
          <p style={{ letterSpacing: "3px" }}>
            <small>{`Home > become a seller`}</small>
          </p>
        </div>
        <div>
          <h1>
            <b>Sell With ME&P</b>
          </h1>
        </div>
        <div>
          <p>
            <small>
              Please fill in the fields below and click place order to complete
              your purchase!
            </small>
          </p>
        </div>
      </ParentFlex>
    </>
  );
};

export default MembershipHeader;
