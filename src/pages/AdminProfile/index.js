import React, { useState } from "react";
import "./AdminProfile.css";

const AdminProfile = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Read the selected image as a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImg(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <>
      <div className="addRentaiPage">
        <div className="addRentalContainer">
          <div className="addRentalText">Profile Settings</div>
          <div className="addCategoryFirstDiv">
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Name</div>
              <input className="categoryNameInput" placeholder="Name" />
            </div>
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Email</div>
              <input className="categoryNameInput" placeholder="Email" />
            </div>
          </div>

          <div className="addCategoryFirstDiv">
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Phone Number</div>
              <input
                className="categoryNameInput"
                placeholder="Phone Number"
                type="text"
              />
            </div>
            <div className="categoryNameDiv">
              <div className="catogeryNameText">DOB</div>
              <input
                className="categoryNameInput"
                placeholder="DOB"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="inputText marginTop">Profile Picture</div>
          </div>
          <div>
            <input
              type="file"
              id="fileInput"
              accept=".jpg, .jpeg, .png, .gif"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
            />
            <label htmlFor="fileInput" className="chooseFileBtn">
              Choose Files
            </label>
          </div>
          <div className="selectedImgDiv">
            {selectedImg && <img src={selectedImg} className="selectedImg" />}
            <button style={{ marginTop: "10px" }} className="chooseFileBtn">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminProfile;
