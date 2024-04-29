import React from "react";
import { Link } from "react-router-dom";

const RentalCard = ({ item }) => {
  return (
    <div
      key={item._id}
      className="sm:w-[15rem] w-[12rem] mb-10  max-w-sm bg-white border border-[#b9b8b9] rounded"
    >
      <Link to={`/rental/details/${item._id}`}>
        <img
          className="sm:h-[8rem] h-[8rem] object-cover w-full"
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
