import React from "react";
import "./newStoresModal.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { approveStore, getStores } from "../../store/actions/store.action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  outline: "none",
  borderRadius: "10px",
};

const NewStoresModal = ({ open, onClose, title, selectedItem }) => {
  //   console.log(selectedItem);
  //   const { date, plan, price, storeId, storeName } = selectedItem;
  //   console.log(storeName);
  const dispatch = useDispatch();

  const approve = () => {
    dispatch(approveStore({ _id: selectedItem?._id }));
    dispatch(getStores());
    onClose();
  };

  return (
    <Modal
      //   className="modalContainer"
      open={open}
      onClose={onClose}
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="newStoresModalContainer">
          <div className="newStoresModalTitleDiv">
            {title}
            <div className="newStoresModalActiveBtn">ACTIVE</div>
          </div>
          <div className="newStoresModalContextDiv">
            <div className="newStoresModalContextDivChild1">
              <div className="newStoresModalContextDivChild1Text1">
                Store ID:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?._id}
              </div>
            </div>
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Store Name:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.name}
              </div>
            </div>
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Store Status:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.approve ? "Approved" : "Not Approved"}
              </div>
            </div>
            {/* <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Membership Plan:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.plan}
              </div>
            </div> */}
          </div>
          <div className="newStoresModalContextDiv">
            {/* <div className="newStoresModalContextDivChild1">
              <div className="newStoresModalContextDivChild1Text1">Price:</div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.price}
              </div>
            </div> */}
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Pricing Plan:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.pricingPlan}
              </div>
            </div>
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">Date:</div>
              <div className="newStoresModalContextDivChild1Text2">
                {new Date(selectedItem?.createdAt).toLocaleString("en-CA")}
              </div>
            </div>
          </div>
          <div className="newStoresModalContextDiv">
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Payment Screen Shot:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                <img src={selectedItem?.paymentScreenShot} />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="newStoresModalBtn" onClick={onClose}>
              Cancel
            </div>
            {!selectedItem?.approve ? (
              <div className="newStoresModalBtn" onClick={approve}>
                Approve
              </div>
            ) : null}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default NewStoresModal;
