import React, { useEffect, useState } from "react";
import { ParentFlex, Parentdiv, StyledCard } from "./style";
import loaders from "../../assets/Loaders.png";
import RollerCompactor from "../../assets/Roller Compactor.png";
import Cranes from "../../assets/Cranes.png";
import Excavators from "../../assets/Excavators.png";
import Dozers from "../../assets/Dozers.png";
import MotorGrader from "../../assets/Motor Grader.png";
import { Key } from "@mui/icons-material";
import HttpClient from "../../services/http-client";
import images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import { getEquipments } from "../../store/actions/equipment.action";
import { getRentals } from "../../store/actions/rentals.action";
import { getParts } from "../../store/actions/parts.action";
import location from "../../assets/Location.png";
import {
  Containerdiv,
  FlexCard,
  FlexParent,
  Styledbutton,
} from "../Featured Equipments/style";

const PopularCategories = () => {
  const dispatch = useDispatch();

  const { equipments } = useSelector((state) => state.EquipmentReducer);
  const { rentals } = useSelector((state) => state.RentalReducer);
  const { parts } = useSelector((state) => state.PartReducer);

  console.log(equipments, rentals, parts);

  useEffect(() => {
    dispatch(getEquipments());
    dispatch(getRentals());
    dispatch(getParts());
  }, [dispatch]);

  return (
    <>
      <Containerdiv>
        <h1>
          <span className="styledblack">Popular</span>{" "}
          <span className="styledYellow">Products</span>
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 90,
          }}
        >
          <FlexParent>
            {equipments?.length > 0 &&
              equipments?.map((item, index) => {
                return (
                  <FlexCard key={index}>
                    <div className="justifybtn">
                      <div>
                        {" "}
                        <div className="alignboth">
                          <p className="greycolor">
                            {" "}
                            <img src={location} alt="location" />
                          </p>
                          <p style={{ fontSize: "small" }}>{item.location}</p>
                        </div>
                        <p>
                          <b>{item.equipment_name}</b>
                        </p>
                      </div>{" "}
                      <div>
                        <br />
                        <p>
                          <b>PKR</b> <b className="yellowcolor">{item.price}</b>
                        </p>
                      </div>
                    </div>

                    <div className="imgclass">
                      <img src={item.images[0]} alt="f1" />
                    </div>

                    <div className="justifybtn pad">
                      <div>
                        <p
                          className="yellowcolor"
                          style={{ fontWeight: "600" }}
                        >
                          WEIGHT
                        </p>
                        <p>
                          <b>5,842 lbs</b>
                        </p>
                      </div>
                      <div className="borderLeft">
                        <p
                          className="yellowcolor"
                          style={{ fontWeight: "600" }}
                        >
                          ENGINE POWER
                        </p>
                        <p>
                          <b>20 hp</b>
                        </p>
                      </div>
                      <div className="borderLeft">
                        <p
                          className="yellowcolor"
                          style={{ fontWeight: "600" }}
                        >
                          DIG DEPTH
                        </p>
                        <p>
                          <b>9 ft 12 in</b>
                        </p>
                      </div>
                    </div>

                    <div>
                      {" "}
                      <Styledbutton>
                        <b>EXPLORE</b>
                      </Styledbutton>
                    </div>
                  </FlexCard>
                );
              })}
          </FlexParent>
          <FlexParent>
            {parts?.length > 0 &&
              parts?.map((item, index) => {
                return (
                  <FlexCard key={index}>
                    <div className="justifybtn">
                      <div>
                        {" "}
                        <div className="alignboth">
                          <p className="greycolor">
                            {" "}
                            <img src={location} alt="location" />
                          </p>
                          <p style={{ fontSize: "small" }}>{item.location}</p>
                        </div>
                        <p>
                          <b>{item.equipment_name}</b>
                        </p>
                      </div>{" "}
                      <div>
                        <br />
                        <p>
                          <b>PKR</b> <b className="yellowcolor">{item.price}</b>
                        </p>
                      </div>
                    </div>

                    <div className="imgclass">
                      <img src={item.images[0]} alt="f1" />
                    </div>

                    <div className="justifybtn pad">
                      <div>
                        <p
                          className="yellowcolor"
                          style={{ fontWeight: "600" }}
                        >
                          WEIGHT
                        </p>
                        <p>
                          <b>5,842 lbs</b>
                        </p>
                      </div>
                      <div className="borderLeft">
                        <p
                          className="yellowcolor"
                          style={{ fontWeight: "600" }}
                        >
                          ENGINE POWER
                        </p>
                        <p>
                          <b>20 hp</b>
                        </p>
                      </div>
                      <div className="borderLeft">
                        <p
                          className="yellowcolor"
                          style={{ fontWeight: "600" }}
                        >
                          DIG DEPTH
                        </p>
                        <p>
                          <b>9 ft 12 in</b>
                        </p>
                      </div>
                    </div>

                    <div>
                      {" "}
                      <Styledbutton>
                        <b>EXPLORE</b>
                      </Styledbutton>
                    </div>
                  </FlexCard>
                );
              })}
          </FlexParent>
        </div>
      </Containerdiv>
    </>
  );
};

export default PopularCategories;
