import React from "react";
import "./expireStoreModal.css";
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

const ExpireStoresModal = ({ open, onClose, title, selectedItem }) => {
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
        <div className="expireStoresModalContainer">
          <div className="expireStoresModalTitleDiv">
            {title}
            <div className="expireStoresModalExpireBtn">EXPIRED</div>
          </div>
          <div className="expireStoresModalContextDiv">
            <div className="expireStoresModalContextDivChild1">
              <div className="expireStoresModalContextDivChild1Text1">
                Store ID:
              </div>
              <div className="expireStoresModalContextDivChild1Text2">
                {selectedItem?.storeId}
              </div>
            </div>
            <div className="expireStoresModalContextDivChild2">
              <div className="expireStoresModalContextDivChild1Text1">
                Store Name:
              </div>
              <div className="expireStoresModalContextDivChild1Text2">
                {selectedItem?.storeName}
              </div>
            </div>
            <div className="expireStoresModalContextDivChild2">
              <div className="expireStoresModalContextDivChild1Text1">
                Membership Plan:
              </div>
              <div className="expireStoresModalContextDivChild1Text2">
                {selectedItem?.plan}
              </div>
            </div>
          </div>
          <div className="expireStoresModalContextDiv">
            <div className="expireStoresModalContextDivChild1">
              <div className="expireStoresModalContextDivChild1Text1">
                Price:
              </div>
              <div className="expireStoresModalContextDivChild1Text2">
                {selectedItem?.price}
              </div>
            </div>
            <div className="expireStoresModalContextDivChild2">
              <div className="expireStoresModalContextDivChild1Text1">
                Purchase Date:
              </div>
              <div className="expireStoresModalContextDivChild1Text2">
                14/05/23
              </div>
            </div>
            <div className="expireStoresModalContextDivChild2">
              <div className="expireStoresModalContextDivChild1Text1">
                Expired Date:
              </div>
              <div className="expireStoresModalContextDivChild1Text2">
                {selectedItem?.expireDate}
              </div>
            </div>
          </div>
          <div className="expireStoresModalBtn" onClick={onClose}>
            Cancel
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ExpireStoresModal;
