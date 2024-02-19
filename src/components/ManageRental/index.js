import React, { useEffect, useState } from "react";
// import "./style.css";
import newOrderImg from "../../assets/newOrderImg.png";
import images from "../../utils/Images";
import Pagination from "../Pagination.js";
import EquipmentModal from "../UpdateEquipmentModal";
import RentalModal from "../RentalModal";
import HttpClient from "../../services/http-client";
import { useDispatch, useSelector } from "react-redux";
import { getRentals } from "../../store/actions/rentals.action";

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

const ManageRental = (props) => {
  const [selectDataForUpdate, setSelectDataForUpdate] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const { rentals } = useSelector((state) => state.RentalReducer);

  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (item) => {
    setSelectDataForUpdate(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getRentals());
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
          <div className="manageCategoryH1">Equipment Name</div>
          <div className="manageCategoryH1">Description</div>
          <div className="manageCategoryH2">Actions</div>
        </div>
        <div>
          {rentals
            ?.slice(indexOfFirstItem, indexOfLastItem)
            ?.map((item, index) => {
              return (
                <div key={index} className="manageCategoryMainDiv">
                  <div className="manageCategoryTableHeading">
                    <div className="manageCategoryH1InMap">{item._id}</div>
                    <div className="manageCategoryH1InMap">
                      {item.rental_name}
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
          totalItems={rentals?.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <RentalModal
          open={open}
          onClose={handleClose}
          data={selectDataForUpdate}
          setOpen={setOpen}
        />
      </div>
    </>
  );
};
export default ManageRental;
