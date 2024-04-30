import React from "react";
import { Link } from "react-router-dom";

const RentalCard = ({ item }) => {
  return (
    <div
      key={item._id}
      className="sm:w-80 w-3/4 mb-10 max-h-2/4 bg-white border border-[grey] rounded"
    >
      <Link to={`/rental/details/${item._id}`}>
        <img
          className="sm:h-84 h-64 object-cover w-full"
          src={item.images[0]}
          alt={item.rental_name}
        />
      </Link>
      <div className="relative bg-[#f4f5f7] w-full p-4 rounded leading-3">
        <p className="mb-3 text-[1rem] text-[#3a3a3a] font-semibold">
          {item.rental_name}
        </p>
        <p className="mb-3 text-[0.8rem] font-600 text-gray2">
          {item.location}
        </p>
        <p className="mb-3 text-[0.8rem] text-[#3a3a3a] font-semibold">
          Rs. {item.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default RentalCard;
