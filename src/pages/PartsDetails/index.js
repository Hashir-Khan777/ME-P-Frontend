/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";
import images from "../../utils/Images";
import RelatedParts from "./RelatedParts";

export default function PartsDetails() {
  const location = useLocation();
  const { data } = location.state;

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
      <div className="sm:max-w-[90%] max-w-[100%] m-auto block">
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
        <RelatedParts />
      </div>
    </div>
  );
}
