/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import images from "../../utils/Images";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const RelatedRentals = (props: any) => {
  const { relatedProduct } = props;
  return (
    <>
      {relatedProduct.length > 0 && (
        <div className={styles.relatedProductDiv}>
          <h1>Related Parts</h1>
          <div className={styles.RelatedProductMapMainDiv}>
            <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%]">
              {relatedProduct.map((e: any, index: number) => {
                return (
                  <div
                    key={e._id}
                    className="sm:w-[15rem] w-[12rem] mb-10  max-w-sm bg-white border border-[#b9b8b9] rounded"
                  >
                    <Link to={`/rental/details/${e._id}`}>
                      <img
                        className="sm:h-[8rem] h-[8rem] object-cover w-full"
                        src={e.images[0]}
                        alt={e.rental_name}
                      />
                    </Link>
                    <div className="relative bg-[#f4f5f7] w-full p-4 rounded leading-3">
                      <p className="mb-3 text-[1rem] text-[#3a3a3a] font-semibold">
                        {e.rental_name}
                      </p>
                      <p className="mb-3 text-[0.8rem] font-600 text-gray2">
                        {e.location}
                      </p>
                      <p className="mb-3 text-[0.8rem] text-[#3a3a3a] font-semibold">
                        Rs. {e.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RelatedRentals;
