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
            NEW STORES
          </Tab>
          <Tab
            className={
              tabName === "exipredStores"
                ? "storeTabBarBtn"
                : "storeTabBarBtnWhite"
            }
            onClick={() => {
              setTabName("exipredStores");
            }}
          >
            EXPIRED STORES
          </Tab>
        </TabList>

        <TabPanel>
          <NewStores name={"New Stores"} />
        </TabPanel>
        <TabPanel>
          <ExpiredStores name={"Expired Stores"} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
