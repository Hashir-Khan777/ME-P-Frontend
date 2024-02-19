import React from "react";
import MembershipHeader from "../../components/membership header";
import SellerPlan from "../../components/seller plan";
import MembershipPlan from "../../components/membership plan";
import MembershipWork from "../../components/membership work";

const BecomeSeller = () => {
  return (
    <>
      <MembershipHeader />
      <SellerPlan />
      <MembershipPlan />
      <MembershipWork />
    </>
  );
};
export default BecomeSeller;
