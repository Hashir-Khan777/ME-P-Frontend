import React, { useState } from "react";
import "./style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DateTimePicker from "react-datetime-picker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  outline: "none",
  borderRadius: "10px",
};

const ManagePartsModal = ({
  open,
  onClose,
  title,
  categoryName,
  discription,
}) => {
  const [value, onChange] = useState(new Date());

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <div className="MEMmodalContainer">
          <div className="MEMheading">Update Parts</div>
          <div className="MEMFirst">
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Product Title</div>
              <input className="MEMrentalInput" placeholder="Product title" />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Make</div>
              <input className="MEMrentalInput" placeholder="Make" />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Price</div>
              <input className="MEMrentalInput" placeholder="Price" />
            </div>
          </div>

          <div className="MEMFirst">
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Category</div>
              <select className="MEMrentalSelectInput">
                <option hidden>Category</option>
                <option>Tracked Excavators</option>
                <option>Tracked Excavators</option>
              </select>
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Location</div>
              <input className="MEMrentalInput" placeholder="Location" />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Condition</div>
              <select className="MEMrentalSelectInput">
                <option hidden>Condition</option>
                <option>Used</option>
                <option>New</option>
              </select>
            </div>
          </div>

          <div>
            <div className="MEMequipmentDisText">Description</div>
            <textarea
              className="MRMequipmentDisInput"
              placeholder="Description"
            ></textarea>
          </div>
          <div>
            <div className="MEMinputText MEMmarginTop">Upload Images</div>
          </div>
          <div>
            <button className="MEMchooseFileBtn">Choose Files</button>
          </div>

          <div className="MRMmodalBtnDiv">
            <div className="MEMmodalUpdateBtn" onClick={onClose}>
              Update
            </div>
            <div className="MEMmodalCancleBtn" onClick={onClose}>
              Cancle
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ManagePartsModal;
