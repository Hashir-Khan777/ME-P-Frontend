/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./style.module.css";
import images from "../../utils/Images";
import RelatedParts from "./RelatedParts";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPartById, getParts } from "../../store/actions/parts.action";
import { useSelector } from "react-redux";
import { isEmpty } from "../../helpers";

export default function PartsDetails() {
  const params = useParams();
  const dispatch = useDispatch();

  const [productImgIndex, setProductImgIndex] = useState(0);

  const { parts, part } = useSelector((state) => state.PartReducer);

  const handleAdd = () => {
    const length = part?.images.length - 1;
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
      setProductImgIndex(part?.images.length - 1);
    }
  };

  useEffect(() => {
    dispatch(getPartById(params));
  }, [dispatch, params]);

  useEffect(() => {
    dispatch(getParts());
  }, [dispatch]);

  return (
    !isEmpty(part) && (
      <div className={styles.container}>
        <div className="sm:max-w-[90%] max-w-[100%] m-auto block">
          <div className={styles.titleDiv}>
            Home / Parts / <span>{part.product_title}</span>
          </div>
          <div className={styles.detailsDiv}>
            <div className={styles.productImgDiv}>
              <img
                src={images.leftMove}
                className={styles.leftImg}
                onClick={handleRemove}
              />
              <img
                src={part?.images[productImgIndex]}
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
                  <img src={images.profile1} />
                  <div>
                    <h1>{part?.store?.name}</h1>
                    <h2>{`Member since ${new Date(
                      part?.store?.createdAt
                    ).getFullYear()}`}</h2>
                    <h3>{`See Profile >`}</h3>
                  </div>
                </div>
                <div className={styles.addToCardBtn}>
                  {part?.store?.phoneNumber}
                </div>
                <div className={styles.emailBtn}>
                  <img src={images.envelope} />
                  {part?.store?.user?.email}
                </div>
              </div>
              <div className={styles.productDetailsDiv}>
                <h1>Details</h1>
                <h2>
                  Category: <span>{part?.category?.category_name}</span>
                </h2>
                <h2>
                  Make: <span>{part?.make}</span>
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
            </div>
          </div>
          <div className={styles.priceDiv}>
            <h1>{part?.product_title}</h1>
            <h2>{`RS ${part?.price?.toLocaleString()}`}</h2>
            <div className={styles.priceDivLocationDiv}>
              <img src={images.location2} />
              <span>{part?.location}</span>
            </div>
          </div>
          <div className={styles.disDiv}>
            <h1>Description</h1>
            <span>{part?.description}</span>
          </div>
          {/* <div className={styles.reviewDiv}>
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
          </div> */}
          <RelatedParts
            relatedProduct={parts.filter(
              (x) => x.category === part?.category?._id && x._id !== part?._id
            )}
          />
        </div>
      </div>
    )
  );
}
