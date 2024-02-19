import React, { useEffect, useState } from "react";
// import "./style.css";
import newOrderImg from "../../assets/newOrderImg.png";
import images from "../../utils/Images";
import Pagination from "../Pagination.js";
import EquipmentModal from "../UpdateEquipmentModal";
import RentalModal from "../RentalModal";
import ManagePartsModal from "../ManagePartsModal";
import { getParts } from "../../store/actions/parts.action";
import { useDispatch, useSelector } from "react-redux";

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

const ManageParts = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const [discription, setDiscription] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const { parts } = useSelector((state) => state.PartReducer);

  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    console.log(item.catogoryName);
    setCategoryName(item.catogoryName);
    setDiscription(item.description);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getParts());
  }, [dispatch]);

  return (
    <>
      <div className="manageEquipmentContainer">
        <div className="manageEquipmentText">Equipment List</div>
        <div className="manageEquipmentSearchDiv">
          <img
            src={images.mananeCategorySearch}
            className="manageEquipmentSearchImg"
          />
          <input placeholder="Search" className="manageEquipmentInput" />
        </div>

        <div className="manageCategoryTableHeading">
          <div className="manageCategoryH1">ID</div>
          <div className="manageCategoryH1">Product Title</div>
          <div className="manageCategoryH1">Description</div>
          <div className="manageCategoryH2">Actions</div>
        </div>
        <div>
          {parts
            ?.slice(indexOfFirstItem, indexOfLastItem)
            ?.map((item, index) => {
              return (
                <div key={index} className="manageCategoryMainDiv">
                  <div className="manageCategoryTableHeading">
                    <div className="manageCategoryH1InMap">{item._id}</div>
                    <div className="manageCategoryH1InMap">
                      {item.product_title}
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
          totalItems={parts?.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <ManagePartsModal
          open={open}
          onClose={handleClose}
          title={"Update Part"}
          categoryName={categoryName}
          discription={discription}
        />
      </div>
    </>
  );
};
export default ManageParts;
