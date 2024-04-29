import React from "react";
import { FlexBox, FlexChild } from "./style";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import car from "../../assets/Car.png";
import location from "../../assets/Location.png";
import { Button } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const SearchBar = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <FlexBox>
        <FlexChild>
          <div className="relative top-[-0.2rem]">
            <p>Vehicle Type</p>
          </div>
          <div>
            <div className="alignboth">
              <div>
                <img src={car} alt="car" />
              </div>
              <div>
                <Box sx={{ minWidth: 100, border: "none", p: 0 }}>
                  <FormControl sx={{ m: 0, minWidth: 100, p: 0 }}>
                    <InputLabel
                      className="fw sm"
                      sx={{ color: "black", fontWeight: "100" }}
                      id="demo-simple-select-autowidth-label"
                    >
                      <b className="inputLabel" style={{ fontWeight: "100" }}>
                        {" "}
                        Select
                      </b>
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                    >
                      <MenuItem value={"Excavators"}>Excavators</MenuItem>
                      <MenuItem value={"Dozers"}>Dozers</MenuItem>
                      <MenuItem value={"Cranes"}>Cranes</MenuItem>
                      <MenuItem value={"Loaders"}>Loaders</MenuItem>
                      <MenuItem value={"Motor Graders"}>Motor Graders</MenuItem>
                      <MenuItem value={"Asphalt, Pavers & Concrete"}>
                        Asphalt, Pavers & Concrete
                      </MenuItem>
                      <MenuItem value={"Roller Compactor"}>
                        Roller Compactor
                      </MenuItem>
                      <MenuItem value={"Dredger"}>Dredger</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
        </FlexChild>
        <FlexChild>
          <div className="relative top-[-1.2rem]">
            <p>Location</p>
          </div>

          <div className="alignboth">
            <img
              className="icon"
              src={location}
              alt="location"
              style={{ marginRight: "10px" }}
            />{" "}
            <span>
              <b className="inputLabel" style={{ fontWeight: "100" }}>
                Choose Location
              </b>
            </span>
          </div>
        </FlexChild>
        <FlexChild>
          <p>Pick Up</p>
          <>
            {" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  "DatePicker",
                  "MobileDatePicker",
                  "DesktopDatePicker",
                  "StaticDatePicker",
                ]}
                sx={{ maxWidth: "170px" }}
              >
                <DemoItem>
                  <DatePicker
                    defaultValue={dayjs("2022-04-17")}
                    sx={{ fill: "orange" }}
                    className="bordermobile"
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </>
        </FlexChild>
        <FlexChild>
          <p>Return</p>
          <>
            {" "}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  "DatePicker",
                  "MobileDatePicker",
                  "DesktopDatePicker",
                  "StaticDatePicker",
                ]}
                sx={{ maxWidth: "170px" }}
              >
                <DemoItem>
                  <DatePicker
                    defaultValue={dayjs("2022-04-17")}
                    className="bordermobile"
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </>
        </FlexChild>
        <FlexChild>
          <br />
          <button className="searchButton">Search</button>
        </FlexChild>
      </FlexBox>
    </>
  );
};

export default SearchBar;
