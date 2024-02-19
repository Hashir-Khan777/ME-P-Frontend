import React, { useState } from "react";
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddParts from "../../components/AddParts";
import ManageParts from "../../components/ManageParts";

const Parts = () => {
  const [tabName, setTabName] = useState("addParts");

  return (
    <>
      <div className="OrderPage">
        <Tabs>
          <TabList className={"tabsContainer"}>
            <Tab
              style={
                tabName === "addParts" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("addParts");
              }}
            >
              ADD PARTS
            </Tab>
            <Tab
              style={
                tabName === "manageParts" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("manageParts");
              }}
            >
              MANAGE PARTS
            </Tab>
          </TabList>

          <TabPanel>
            <AddParts />
          </TabPanel>
          <TabPanel>
            <ManageParts />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Parts;

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
