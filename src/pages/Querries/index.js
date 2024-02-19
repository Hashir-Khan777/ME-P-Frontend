import React, { useState } from "react";
import "./querries.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PendingQuerries from "../../components/PendingQuerries";
// import NewStores from "../../components/NewStores";
// import ExpiredStores from "../../components/ExpiredStores";

export default function Querries() {
  const [tabName, setTabName] = useState("pending");
  return (
    <div className="querriesContainer">
      <Tabs>
        <TabList className={"querriesTabsContainer"}>
          <Tab
            className={
              tabName === "pending"
                ? "querriesTabBarBtn"
                : "querriesTabBarBtnWhite"
            }
            onClick={() => {
              setTabName("pending");
            }}
          >
            PENDING
          </Tab>
          <Tab
            className={
              tabName === "replied"
                ? "querriesTabBarBtn"
                : "querriesTabBarBtnWhite"
            }
            onClick={() => {
              setTabName("replied");
            }}
          >
            REPLIED
          </Tab>
        </TabList>

        <TabPanel>
          <PendingQuerries name={"Pending Querries"} />
        </TabPanel>
        <TabPanel>{/* <ExpiredStores name={"Expired Stores"} /> */}</TabPanel>
      </Tabs>
    </div>
  );
}
