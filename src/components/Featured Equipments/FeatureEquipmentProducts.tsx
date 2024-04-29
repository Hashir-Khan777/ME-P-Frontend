/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import images from "../../utils/Images";
import { Link, useNavigate } from "react-router-dom";
import { data } from "./FeatureEquipmentData";
import { useDispatch, useSelector } from "react-redux";
import { getEquipments } from "../../store/actions/equipment.action";
import EquipmentCard from "./EqupmentCard";
const FeatureEquipmentProducts = (props: any) => {
  const { equipments } = useSelector((state: any) => state.EquipmentReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEquipments());
  }, [dispatch]);

  return (
    <>
      <div className={styles.secondDivSecond}>
        <div className={styles.mapMainDiv}>
          {equipments?.map((item: any) => {
            return <EquipmentCard item={item} />;
          })}
        </div>
        <div className={styles.browseBtn}>BROWSE EQUIPMENT</div>
      </div>
    </>
  );
};

export default FeatureEquipmentProducts;
