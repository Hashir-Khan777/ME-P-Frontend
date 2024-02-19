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
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  outline: "none",
  borderRadius: "10px",
};

const EquipmentModal = ({
  open,
  onClose,
  title,
  categoryName,
  discription,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <div className="MEMmodalContainer">
          <div className="MEMheading">Update Equipment</div>
          <div className="MEMFirst">
            <div className="MEMinputDiv">
              <div className="MEMinputText">Equipment Name</div>
              <input className="MEMrentalInput" placeholder="Equipment Name" />
            </div>

            <div className="MEMinputDiv">
              <div className="MEMinputText">Model</div>
              <input className="MEMrentalInput2" placeholder="Model" />
            </div>
          </div>
          <div className="MEMFirst">
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Year</div>
              <input className="MEMrentalInput" placeholder="Year" />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Make</div>
              <input className="MEMrentalInput" placeholder="Make" />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">SKU</div>
              <input className="MEMrentalInput" placeholder="SKU" />
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
              className="MEMequipmentDisInput"
              placeholder="Description"
            ></textarea>
          </div>
          <div>
            <div className="MEMinputText MEMmarginTop">Upload Images</div>
          </div>
          <div>
            <button className="MEMchooseFileBtn">Choose Files</button>
          </div>

          <div className="MEMmodalBtnDiv">
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

export default EquipmentModal;
