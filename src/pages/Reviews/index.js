import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NewReviews from "../../components/NewReview";
import ManageReviews from "../../components/ManageReviews";

export default function Reviews(props) {
  const [tabName, setTabName] = useState("newReview");

  return (
    <>
      <div className="OrderPage">
        <Tabs>
          <TabList className={"tabsContainer"}>
            <Tab
              style={
                tabName === "newReview" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("newReview");
              }}
            >
              NEW REVIEWS
            </Tab>
            <Tab
              style={
                tabName === "manageReview" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("manageReview");
              }}
            >
              MANAGE REVIEWS
            </Tab>
          </TabList>

          <TabPanel>
            <NewReviews props1={"New Reviews"} />
          </TabPanel>
          <TabPanel>
            <ManageReviews props1={"Manage Reviews"} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}

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
