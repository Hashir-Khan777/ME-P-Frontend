import React from "react";
import "./style.css";
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

const CustomModal = ({ open, onClose, title, categoryName, discription }) => {
  return (
    <Modal
      //   className="modalContainer"
      open={open}
      onClose={onClose}
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="modalContainer">
          <div className="modaUpdateCateText">{title}</div>
          <div className="modalInputTitle">Category Name</div>
          <input value={categoryName} className="modalInput" />
          <div className="modalInputTitle">Category Name</div>
          <textarea value={discription} className="modalTextArea"></textarea>
          <div className="modalBtnDiv">
            <div className="modalUpdateBtn" onClick={onClose}>
              Update
            </div>
            <div className="modalCancleBtn" onClick={onClose}>
              Cancle
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomModal;
