/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./style.module.css";
import images from "../../utils/Images";
import RelatedRentals from "./RelatedRentals";
import { useDispatch, useSelector } from "react-redux";
import { getRentalById, getRentals } from "../../store/actions/rentals.action";
import { isEmpty } from "../../helpers";

export default function RentalsDetails() {
  const params = useParams();

  const [productImgIndex, setProductImgIndex] = useState(0);

  const { rental, rentals } = useSelector((state) => state.RentalReducer);

  const dispatch = useDispatch();

  const handleAdd = () => {
    const length = rental?.images.length - 1;
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
      setProductImgIndex(rental?.images.length - 1);
    }
  };

  useEffect(() => {
    dispatch(getRentalById(params));
  }, [dispatch, params?._id]);

  useEffect(() => {
    dispatch(getRentals());
  }, [dispatch]);

  return (
    !isEmpty(rental) && (
      <div className={styles.container}>
        <div className="sm:max-w-[90%] max-w-[100%] m-auto block">
          <div className={styles.titleDiv}>
            Home / Rentals / <span>{rental?.rental_name}</span>
          </div>
          <div className={styles.detailsDiv}>
            <div className={styles.productImgDiv}>
              <img
                src={images.leftMove}
                className={styles.leftImg}
                onClick={handleRemove}
              />
              <img
                src={rental?.images[productImgIndex]}
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
                    <h1>{rental?.store?.name}</h1>
                    <h2>{`Member since ${new Date(
                      rental?.store?.createdAt
                    ).getFullYear()}`}</h2>
                    <h3>{`See Profile >`}</h3>
                  </div>
                </div>
                <div className={styles.addToCardBtn}>
                  {rental?.store?.phoneNumber}
                </div>
                <div className={styles.emailBtn}>
                  <img src={images.envelope} />
                  {rental?.store?.user?.email}
                </div>
              </div>
              <div className={styles.locationDiv}>
                <h1>Location</h1>
                <div className={styles.flexRow2}>
                  <img src={images.location2} />
                  <span>{rental?.location}</span>
                </div>
              </div>
              <div className={styles.productDetailsDiv}>
                <h1>Details</h1>
                <div className={styles.flexRow}>
                  <div style={{ flex: 1 }}>
                    <h2>
                      Make: <span>{rental?.make}</span>
                    </h2>
                    <h2>
                      Model: <span>{rental?.model}</span>
                    </h2>
                    <h2>
                      Category: <span>{rental?.category?.category_name}</span>
                    </h2>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3>
                      Condition: <span>{rental?.condition}</span>
                    </h3>
                    <h3>
                      SKU: <span>{rental?.sku}</span>
                    </h3>
                    <h3>
                      Year:{" "}
                      <span>{new Date(rental?.createdAt).getFullYear()}</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.priceDiv}>
            <h1>{rental?.rental_name}</h1>
            <h2>{`RS ${rental?.price}`}</h2>
            <div className={styles.priceDivLocationDiv}>
              <img src={images.location2} />
              <span>{rental?.location}</span>
            </div>
          </div>
          <div className={styles.disDiv}>
            <h1>Description</h1>
            <span>{rental?.description}</span>
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
                  return <img key={index} src={images.ratingStar} />;
                })}
              </div>
              <span>{`"${item?.title}"`}</span> <br />
              {item.images.map((item, index) => {
                return <img key={index} src={item} />;
              })}
            </div>
          );
        })}
      </div> */}
          <RelatedRentals
            relatedProduct={rentals.filter(
              (x) =>
                x.category === rental?.category?._id && x._id !== rental?._id
            )}
          />
        </div>
      </div>
    )
  );
}
