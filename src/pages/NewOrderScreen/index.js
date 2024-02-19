import React, { useState } from "react";
import "./style.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import NewOrder from "../../components/NewOrder";
import PendingOrders from "../../components/PendingOrders";
import CompletedOrders from "../../components/CompletedOrders";
import CanceledOrders from "../../components/CanceledOrders";
import { Outlet, Route, Routes } from "react-router-dom";

const NewOrderScreen = () => {
  const [tabName, setTabName] = useState("newOrder");
  return (
    <>
      <div className="OrderPage">
        <Tabs>
          <TabList className={"tabsContainer"}>
            <Tab
              style={
                tabName === "newOrder" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("newOrder");
              }}
            >
              NEW ORDERS
            </Tab>
            <Tab
              style={
                tabName === "pending" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("pending");
              }}
            >
              PENDING
            </Tab>
            <Tab
              style={
                tabName === "completed" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("completed");
              }}
            >
              COMPLETED
            </Tab>
            <Tab
              style={
                tabName === "canceled" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("canceled");
              }}
            >
              CANCELED
            </Tab>
          </TabList>

          <TabPanel>
            <NewOrder prop1={"New Orders"} />
          </TabPanel>
          <TabPanel>
            <PendingOrders prop1={"Pending Orders"} />
          </TabPanel>
          <TabPanel>
            <CompletedOrders prop1={"Completed Orders"} />
          </TabPanel>
          <TabPanel>
            <CanceledOrders prop1={"Canceled Orders"} />
          </TabPanel>
        </Tabs>
        {/* <Routes>
          <Route path="newOrder" element={<NewOrder />} />
          <Route path="pending" element={<PendingOrders />} />
          <Route path="completed" element={<CompletedOrders />} />
          <Route path="canceled" element={<CanceledOrders />} />
        </Routes> */}
      </div>
    </>
  );
};
export default NewOrderScreen;

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
