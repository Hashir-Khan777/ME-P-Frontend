/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styles from "./style.module.css";
import images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import {
  getEquipmentById,
  getEquipments,
} from "../../store/actions/equipment.action";
import { isEmpty } from "../../helpers";

export default function EquipmentDetails() {
  const [productImgIndex, setProductImgIndex] = useState(0);

  const { equipment, equipments } = useSelector(
    (state) => state.EquipmentReducer
  );

  const params = useParams();
  const dispatch = useDispatch();

  const handleAdd = () => {
    const length = equipment?.images.length - 1;
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
      setProductImgIndex(equipment?.images.length - 1);
    }
  };

  useEffect(() => {
    dispatch(getEquipmentById(params));
  }, [dispatch, params._id]);

  useEffect(() => {
    dispatch(getEquipments());
  }, [dispatch]);

  return (
    !isEmpty(equipment) && (
      <div className={styles.container}>
        <div className={styles.titleDiv}>
          Home / Equipments / <span>{equipment.equipment_name}</span>
        </div>
        <div className={styles.detailsDiv}>
          <div className={styles.productImgDiv}>
            <img
              src={images.leftMove}
              className={styles.leftImg}
              onClick={handleRemove}
            />
            <img
              src={equipment?.images[productImgIndex]}
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
                  <h1>{equipment?.store?.name}</h1>
                  <h2>{`Member since ${new Date(
                    equipment?.store?.createdAt
                  ).getFullYear()}`}</h2>
                  <h3>{`See Profile >`}</h3>
                </div>
              </div>
              <div className={styles.addToCardBtn}>
                {equipment?.store?.phoneNumber}
              </div>
              <div className={styles.emailBtn}>
                <img src={images.envelope} />
                {equipment?.store?.user?.email}
              </div>
            </div>
            <div className={styles.locationDiv}>
              <h1>Location</h1>
              <div className={styles.flexRow2}>
                <img src={images.location2} />
                <span>{equipment?.location}</span>
              </div>
            </div>
            <div className={styles.productDetailsDiv}>
              <h1>Details</h1>
              {/* <div className={styles.flexRow}> */}
              <div className={styles.flex}>
                <h2>
                  Make: <span>{equipment?.make}</span>
                </h2>
                <h3>
                  Condition: <span>{equipment?.condition}</span>
                </h3>
              </div>
              <div className={styles.flex}>
                <h2>
                  Model: <span>{equipment?.model}</span>
                </h2>

                <h3>
                  SKU: <span>{equipment?.sku}</span>
                </h3>
              </div>
              <div className={styles.flex}>
                <h2>
                  Category: <span>{equipment?.category?.category_name}</span>
                </h2>
                <h3>
                  Year:{" "}
                  <span>{new Date(equipment?.createdAt).getFullYear()}</span>
                </h3>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className={styles.priceDiv}>
          <h1>{equipment?.equipment_name}</h1>
          <h2>{`RS ${equipment?.price}`}</h2>
          <div className={styles.priceDivLocationDiv}>
            <img src={images.location2} />
            <span>{equipment?.location}</span>
          </div>
        </div>
        <div className={styles.disDiv}>
          <h1>Description</h1>
          <span>{equipment?.description}</span>
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
        {equipments.filter(
          (x) =>
            x.category === equipment?.category?._id && x._id !== equipment?._id
        ).length > 0 && (
          <div className={styles.relatedProductDiv}>
            <h1>Related Equipments</h1>
            <div className={styles.RelatedProductMapMainDiv}>
              {equipments
                .filter(
                  (x) =>
                    x.category === equipment?.category?._id &&
                    x._id !== equipment?._id
                )
                .map((item, index) => {
                  return (
                    <div key={index} className={styles.readDetailsCard}>
                      <div className={styles.readDetailsCardRow}>
                        <div className={styles.readDetailsCardRowRight}>
                          <img
                            className={styles.cardLocationImg}
                            src={images.location}
                          />
                          <div className={styles.cardLocationText}>
                            {item.location}
                          </div>
                        </div>
                        <div className={styles.cardTextBold}>
                          Rs {item.price}
                        </div>
                      </div>
                      <div className={styles.readDetailsCardRow}>
                        <div className={styles.cardTextBold}>
                          {item.equipment_name}
                        </div>
                        <div className={styles.cardDayText}>per day</div>
                      </div>
                      <img className={styles.cardImage} src={item.images[0]} />
                      <div className={styles.cardCommentText}>
                        {item.comment}
                      </div>
                      <Link to={`/equipment/details/${item._id}`}>
                        <div className={styles.readDetailsBtn}>
                          Read Details
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    )
  );
}
