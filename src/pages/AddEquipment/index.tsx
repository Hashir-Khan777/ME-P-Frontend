import React, { useState } from "react";
// import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddEquipment from "../../components/AddEquipment";
import ManageEquipment from "../../components/ManageEquipment";

const Equipment = () => {
  const [tabName, setTabName] = useState("addEquipment");

  return (
    <>
      <div className="OrderPage">
        <Tabs>
          <TabList className={"tabsContainer"}>
            <Tab
              style={
                tabName === "addEquipment" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("addEquipment");
              }}
            >
              ADD EQUIPMENT
            </Tab>
            <Tab
              style={
                tabName === "manageEquipment"
                  ? styles.tabActiveBtn
                  : styles.tabBtn
              }
              onClick={() => {
                setTabName("manageEquipment");
              }}
            >
              MANAGE EQUIPMENT
            </Tab>
          </TabList>

          <TabPanel>
            <AddEquipment />
          </TabPanel>
          <TabPanel>
            <ManageEquipment />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Equipment;

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
