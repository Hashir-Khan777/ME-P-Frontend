/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const RelatedParts = ({ relatedProduct }: any) => {
  return (
    <>
      {relatedProduct.length > 0 && (
        <div className={styles.relatedProductDiv}>
          <h1>Related Parts</h1>
          <div className={styles.RelatedProductMapMainDiv}>
            <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%] gap-10 ">
              {relatedProduct.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="sm:h-[20rem] sm:w-[15rem] h-[16rem] w-[12rem] mb-10  max-w-sm bg-white border border-[#b9b8b9] rounded"
                  >
                    <Link to={`/part/details/${item?._id}`}>
                      <img
                        src={item.images[0]}
                        className="sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem] object-cover m-auto block mt-12"
                        // className={styles.mapImg}
                      />
                    </Link>
                    <div className="h-[6rem] relative bg-[#f4f5f7] w-full p-4 sm:top-[2.9rem] top-[0.83rem] leading-3">
                      <p className="mb-3 text-[1rem] text-[#3a3a3a] font-semibold">
                        {item.product_title}
                      </p>
                      <p className="mb-3 text-[0.6rem] font-600 text-gray2">
                        {item.location}
                      </p>
                      <p className="mb-3 text-[0.8rem] text-[#3a3a3a] font-semibold">
                        {item.price}
                      </p>
                    </div>
                    {/* <div className={styles.mapText1}>{item.name}</div>
                      <div className={styles.mapText2}>{item.location}</div>
                      <div className={styles.mapText3}>{item.price}</div> */}
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

export default RelatedParts;
