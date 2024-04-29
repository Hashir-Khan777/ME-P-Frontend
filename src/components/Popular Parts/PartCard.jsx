import React from "react";
import { FlexCard, Styledbutton } from "./style";
import { Link } from "react-router-dom";

const PartCard = ({ item }) => {
  return (
    <FlexCard key={item._id}>
      <div className="bgyellow">
        <p>{item.location}</p>
      </div>

      <img
        src={item.images[0]}
        alt="f1"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="justifybtn">
        <div>
          <span className="text-sm">
            <b>{item.product_title}</b>
          </span>
        </div>{" "}
        <div>
          <span>
            <b>$</b>{" "}
            <b className="yellowcolor">{item.price.toLocaleString()}</b>
          </span>
        </div>
      </div>
      <div className="mb-3 sm:text-[0.7rem] text-[0.6rem] text-[#3a3a3a] max-w-[90%] m-auto block leading-6">
        <p>{item.description}</p>
      </div>
      <Link to={`/part/details/${item._id}`}>
        <div>
          <Styledbutton>
            <b>EXPLORE</b>
          </Styledbutton>
        </div>
      </Link>
    </FlexCard>
  );
};

export default PartCard;
