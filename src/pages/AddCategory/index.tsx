import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddCategory from "../../components/AddCategory";
import ManageCategory from "../../components/ManageCategory";

const Category = () => {
  const [tabName, setTabName] = useState("addCategory");

  return (
    <>
      <div className="OrderPage">
        <Tabs>
          <TabList className={"tabsContainer"}>
            <Tab
              style={
                tabName === "addCategory" ? styles.tabActiveBtn : styles.tabBtn
              }
              onClick={() => {
                setTabName("addCategory");
              }}
            >
              ADD CATEGORY
            </Tab>
            <Tab
              style={
                tabName === "manageCategory"
                  ? styles.tabActiveBtn
                  : styles.tabBtn
              }
              onClick={() => {
                setTabName("manageCategory");
              }}
            >
              MANAGE CATEGORY
            </Tab>
          </TabList>

          <TabPanel>
            <AddCategory />
          </TabPanel>
          <TabPanel>
            <ManageCategory />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
export default Category;

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
// <div className="addCategoryPage">
//   <div className="categoryForm">
//     <div className="addCategoryText">Add Category</div>
//     <div className="addCategoryFirstDiv">
//       <div className="categoryNameDiv">
//         <div className="catogeryNameText">Category Name</div>
//         <input className="categoryNameInput" placeholder="Category Name" />
//       </div>
//       <div className="categoryNameDiv">
//         <div className="catogeryNameText">Slug</div>
//         <input className="categoryNameInput" placeholder="Slug" />
//       </div>
//     </div>
//     <div>
//       <div className="catogeryDisText">Description</div>
//       {/* <input className="categoryDisInput" /> */}
//       <textarea
//         className="categoryDisInput"
//         placeholder="Description"
//       ></textarea>
//     </div>
//     <button className="submitBtn">Submit</button>
//   </div>
// </div>;
