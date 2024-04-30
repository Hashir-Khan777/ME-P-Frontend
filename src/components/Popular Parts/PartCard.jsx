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
      <div className="mb-3 px-2 ">
        <p className="text-center text-[13px]" >{item.description}</p>
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
