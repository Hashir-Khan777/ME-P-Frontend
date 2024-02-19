import React from "react";
import "./newStoresModal.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
                {selectedItem?.storeId}
              </div>
            </div>
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Store Name:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.storeName}
              </div>
            </div>
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Membership Plan:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.plan}
              </div>
            </div>
          </div>
          <div className="newStoresModalContextDiv">
            <div className="newStoresModalContextDivChild1">
              <div className="newStoresModalContextDivChild1Text1">Price:</div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.price}
              </div>
            </div>
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">
                Purchase Date:
              </div>
              <div className="newStoresModalContextDivChild1Text2">
                14/05/23
              </div>
            </div>
            <div className="newStoresModalContextDivChild2">
              <div className="newStoresModalContextDivChild1Text1">Date:</div>
              <div className="newStoresModalContextDivChild1Text2">
                {selectedItem?.date}
              </div>
            </div>
          </div>
          <div className="newStoresModalBtn" onClick={onClose}>
            Cancel
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default NewStoresModal;
