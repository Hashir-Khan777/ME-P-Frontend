import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddRental from "../../components/AddRental";
import ManageRental from "../../components/ManageRental";
// import "./style.css";

const Rental = () => {
  const [tabName, setTabName] = useState("addRentals");

  return (
    <>
      <div className="OrderPage">
        <Tabs>
          <TabList className={"tabsContainer"}>
            <Tab
              style={
                tabName === "addRentals" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("addRentals");
              }}
            >
              ADD RENTALS
            </Tab>
            <Tab
              style={
                tabName === "manageRentals"
                  ? styles.tabActiveBtn
                  : styles.tabBtn
              }
              onClick={() => {
                setTabName("manageRentals");
              }}
            >
              MANAGE RENTALS
            </Tab>
          </TabList>

          <TabPanel>
            <AddRental />
          </TabPanel>
          <TabPanel>
            <ManageRental />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Rental;

const styles = {
  tabActiveBtn: {
    backgroundColor: "#FFBA3F",
    border: "none",
    borderRadius: "5px",
    paddingRight: "30px",
    paddingLeft: "30px",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
    marginLeft: "10px",
  },
  tabBtn: {
    backgroundColor: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    paddingRight: "30px",
    paddingLeft: "30px",
    color: "black",
    fontWeight: "600",
    fontSize: "15px",
    boxShadow: "1px 2px 9px #e3e3e3",
    marginLeft: "10px",
  },
};
