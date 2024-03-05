import React, { useState } from "react";
import {
  ChildFlex1,
  ChildFlex2,
  DivContainer,
  FLexPrice,
  Filter,
  FlexBetween,
  FlexCard,
  FlexParent,
  ParentFlex,
  Styledbutton,
} from "./style";
import filterlogo from "../../assets/filter.png";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import location from "../../assets/Location.png";
import { Box, Pagination, Slider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductFilter = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  const cardObj = [
    {
      id: 1,
      img: f1,
    },
    {
      id: 2,
      img: f2,
    },
    {
      id: 3,
      img: f3,
    },
  ];

  const Categories = [
    {
      id: 1,
      name: "Excavators",
    },
    {
      id: 2,
      name: "Dozers",
    },
    {
      id: 3,
      name: "Cranes",
    },
    {
      id: 4,
      name: "Loaders",
    },
    {
      id: 5,
      name: "Asphalt, Pavers & Concrete",
    },
    {
      id: 6,
      name: "Roller Compactor",
    },
    {
      id: 7,
      name: "Dredger",
    },
  ];

  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <DivContainer>
        <ParentFlex>
          <ChildFlex1>
            <Filter>
              {open && (
                <div className="customwidth">
                  <p>Filter</p>
                </div>
              )}

              <>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpen(!open)}
                  src={filterlogo}
                  alt="filterlogo"
                />
              </>
            </Filter>
            {open && (
              <>
                <div
                  style={{ padding: "10px 10px" }}
                  className="customwidth borderright"
                >
                  <p style={{ fontSize: "25px", color: "#807D7E" }}>
                    Categories
                  </p>
                  <div>
                    {Categories.map((e) => {
                      return (
                        <div
                          style={{ padding: "13px 0px", color: "black" }}
                          key={e.id}
                        >
                          <>{e.name}</>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <FLexPrice>
                  <div>
                    <p
                      style={{
                        fontSize: "25px",
                        marginBottom: "0px ",
                        padding: "0px 10px",
                      }}
                    >
                      <>Price</>
                    </p>
                  </div>

                  <div>
                    {" "}
                    <Box sx={{ width: 200 }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        sx={{ color: "#FFBA3F" }}
                      />
                    </Box>
                  </div>
                  <div>
                    <button>70</button>
                    <button>600</button>
                  </div>
                </FLexPrice>
              </>
            )}
          </ChildFlex1>
          <ChildFlex2 style={{ minWidth: open ? "75%" : "100%" }}>
            <FlexBetween>
              <div>
                <input type="text" placeholder="Search" />
              </div>
              <div>
                <p>Showing 1-3 of 3 results</p>
              </div>
            </FlexBetween>
            <div>
              <FlexParent>
                {cardObj.map((e) => {
                  return (
                    <FlexCard key={e.id}>
                      <div className="justifybtn">
                        <div>
                          {" "}
                          <div className="alignboth">
                            <p className="greycolor">
                              {" "}
                              <img src={location} alt="location" />
                            </p>
                            <p style={{ fontSize: "small" }}>
                              Clifton Karachi, Pakistan
                            </p>
                          </div>
                          <p>
                            <b>3 Ton Excavator</b>
                          </p>
                        </div>{" "}
                        <div>
                          <br />
                          <p>
                            <b>$</b> <b className="yellowcolor">46000</b>
                          </p>
                        </div>
                      </div>

                      <div className="imgclass">
                        <img src={e.img} alt="f1" />
                      </div>

                      <div className="justifybtn pad">
                        <div>
                          <p style={{ color: "#6D6E76" }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eius impedit ab nobis necessitatiorporis,
                            voluptas, amet esse.
                          </p>
                        </div>
                      </div>

                      <div>
                        {" "}
                        <Styledbutton>
                          <b onClick={() => navigate("/EquipmentDetails")}>
                            Read More
                          </b>
                        </Styledbutton>
                      </div>
                    </FlexCard>
                  );
                })}
                <div>
                  <Stack spacing={2}>
                    <Pagination count={3} variant="outlined" shape="rounded" />
                  </Stack>
                </div>
                
              </FlexParent>
            </div>
          </ChildFlex2>
        </ParentFlex>
      </DivContainer>
    </>
  );
};

export default ProductFilter;
