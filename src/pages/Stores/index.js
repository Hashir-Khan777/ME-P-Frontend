import React, { useState } from "react";
import "./Stores.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NewStores from "../../components/NewStores";
import ExpiredStores from "../../components/ExpiredStores";

export default function Stores() {
  const [tabName, setTabName] = useState("newStores");
  return (
    <div className="storesContainer">
      <Tabs>
        <TabList className={"storesTabsContainer"}>
          <Tab
            className={
              tabName === "newStores" ? "storeTabBarBtn" : "storeTabBarBtnWhite"
            }
            onClick={() => {
              setTabName("newStores");
            }}
          >
            STORES
          </Tab>
        </TabList>

        <TabPanel>
          <NewStores name={"Stores"} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
