/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";
import images from "../../utils/Images";
import RentalSlider from "../../components/RentalSlider";

export default function PartsDetails() {
  const location = useLocation();
  const { data, relatedProduct } = location.state;
  console.log("relatedProduct-==--=-==--=", relatedProduct);

  const [productImgIndex, setProductImgIndex] = useState(0);

  const handleAdd = () => {
    console.log(data?.image.length - 1);
    const length = data?.image.length - 1;
    if (productImgIndex < length) {
      setProductImgIndex(productImgIndex + 1);
    } else {
      setProductImgIndex(0);
    }
  };

  const handleRemove = () => {
    if (productImgIndex > 0) {
      setProductImgIndex(productImgIndex - 1);
    } else {
      setProductImgIndex(data?.image.length - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className="max-w-[90%] m-auto block">
        <div className={styles.titleDiv}>
          Home / Parts / <span>{data.name}</span>
        </div>
        <div className={styles.detailsDiv}>
          <div className={styles.productImgDiv}>
            <img
              src={images.leftMove}
              className={styles.leftImg}
              onClick={handleRemove}
            />
            <img
              src={data?.image[productImgIndex]}
              className={styles.productImg}
            />
            <img
              src={images.rightMove}
              className={styles.rightImg}
              onClick={handleAdd}
            />
          </div>
          <div className={styles.detailsDivChild}>
            <div className={styles.userDetailsMainDiv}>
              <div className={styles.userDetailsDiv}>
                <img src={data?.userData?.profileImg} />
                <div>
                  <h1>{data?.userData?.name}</h1>
                  <h2>{`Member since ${data?.userData?.joiningData}`}</h2>
                  <h3>{`See Profile >`}</h3>
                </div>
              </div>
              <div className={styles.addToCardBtn}>ADD TO CART</div>
            </div>
            <div className={styles.productDetailsDiv}>
              <h1>Details</h1>
              <h2>
                Category: <span>{data?.category}</span>
              </h2>
              <h2>
                Make: <span>{data?.make}</span>
              </h2>
              {/* <div className={styles.userDetailsDiv}>
              <img src={data?.userData?.profileImg} />
              <div>
                <h1>{data?.userData?.name}</h1>
                <h2>{`Member since ${data?.userData?.joiningData}`}</h2>
                <h3>{`See Profile >`}</h3>
              </div>
            </div>
            <div className={styles.addToCardBtn}>ADD TO CART</div> */}
            </div>
            <div className={styles.add_idDiv}>{`AD ID ${data?._id}`}</div>
          </div>
        </div>
        <div className={styles.priceDiv}>
          <h1>{data?.name}</h1>
          <h2>{`RS ${data?.price}`}</h2>
          <div className={styles.priceDivLocationDiv}>
            <img src={images.location2} />
            <span>{data?.location}</span>
          </div>
        </div>
        <div className={styles.disDiv}>
          <h1>Description</h1>
          <span>{data?.description}</span>
        </div>
        <div className={styles.reviewDiv}>
          <h1>Reviews</h1>
          {data?.review.map((item, index) => {
            const starArray = Array.from({ length: item.star });
            return (
              <div key={index}>
                <div className={styles.reviewNameStarDiv}>
                  <span>{item.name}</span>
                  {starArray.map((item, index) => {
                    return (
                      <>
                        <div>
                          <img key={index} src={images.ratingStar} />
                        </div>
                      </>
                    );
                  })}
                </div>
                <span>{`"${item?.title}"`}</span> <br />
                <div className="flex flex-row flex-wrap">
                  {item.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      className={styles.reviewImg}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {relatedProduct.length > 0 && (
          <div className={styles.relatedProductDiv}>
            <h1>Related Parts</h1>
            <div className={styles.RelatedProductMapMainDiv}>
              <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%] gap-10 ">
                {relatedProduct.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="sm:h-[20rem] sm:w-[15rem] h-[16rem] w-[12rem] mb-10  max-w-sm bg-white border border-[#b9b8b9] rounded"
                      // className={styles.mapDiv}
                      // onClick={() => {
                      //   handleNavigation(item);
                      // }}
                    >
                      <img
                        src={item.image[0]}
                        className="sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem] object-cover m-auto block mt-12"
                        // className={styles.mapImg}
                      />
                      <div className="h-[6rem] relative bg-[#f4f5f7] w-full p-4 sm:top-[2.9rem] top-[0.83rem] leading-3">
                        <p className="mb-3 text-[1rem] text-[#3a3a3a] font-semibold">
                          {item.name}
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
      </div>
    </div>
  );
}
