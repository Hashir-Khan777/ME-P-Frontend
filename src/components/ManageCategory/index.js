import React, { useEffect, useState } from "react";
import "./style.css";
import newOrderImg from "../../assets/newOrderImg.png";
import images from "../../utils/Images";
import Pagination from "../Pagination.js";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import CustomModal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/category.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ManageCategory = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const [discription, setDiscription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const dispath = useDispatch();

  const { categories } = useSelector((state) => state.CategoryReducer);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    console.log(item.catogoryName);
    setCategoryName(item.category_name);
    setDiscription(item.description);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispath(getCategories());
  }, [dispath]);

  console.log(categories);

  return (
    <>
      <div className="manageCategoryContainer">
        <div className="manageCategoryText">Category List</div>
        <div className="manageCategorySearchDiv">
          <img
            src={images.mananeCategorySearch}
            className="manageCategorySearchImg"
          />
          <input placeholder="Search" className="manageCategoryInput" />
        </div>

        <div className="manageCategoryTableHeading">
          <div className="manageCategoryH1">ID</div>
          <div className="manageCategoryH1">Category Name</div>
          <div className="manageCategoryH1">Description</div>
          <div className="manageCategoryH2">Actions</div>
        </div>
        <div>
          {categories
            ?.slice(indexOfFirstItem, indexOfLastItem)
            .map((item, index) => {
              return (
                <div key={index} className="manageCategoryMainDiv">
                  <div className="manageCategoryTableHeading">
                    <div className="manageCategoryH1InMap">{item._id}</div>
                    <div className="manageCategoryH1InMap">
                      {item.category_name}
                    </div>
                    <div className="manageCategoryH1InMap">
                      {item.description}
                    </div>
                    <div className="manageCategoryH2">
                      <div
                        className="manageCategoryUpdateBtn"
                        onClick={() => {
                          handleOpen(item);
                        }}
                      >
                        Update
                      </div>
                      <div className="manageCategoryDeleteBtn">Delete</div>
                    </div>
                  </div>
                  <img
                    src={images.manageReviwLine}
                    className="manageReviewLine"
                  />
                </div>
              );
            })}
        </div>

        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={categories.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <CustomModal
          open={open}
          onClose={handleClose}
          title={"Update Category"}
          categoryName={categoryName}
          discription={discription}
        />
      </div>
    </>
  );
};
export default ManageCategory;
