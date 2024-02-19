import React, { useState } from "react";
import "./style.css";
import SellerHeader from "../../components/SeelerHeader";

const Profile = () => {
  const [selectedImg, setSelectedImg] = useState("");
  return (
    <>
      <div className="addRentaiPage">
        <div className="addRentalContainer">
          <div className="addRentalText">Profile Settings</div>
          <div className="addCategoryFirstDiv">
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Store Title</div>
              <input className="categoryNameInput" placeholder="Store Title" />
            </div>
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Email</div>
              <input className="categoryNameInput" placeholder="Email" />
            </div>
          </div>
          <div className="addRentalFirst">
            <div className="inputDiv">
              <div className="inputText">State</div>
              {/* <input className="rentalInput" /> */}
              <select className="rentalSelectInput">
                <option hidden>State</option>
                <option>Sindh</option>
                <option>Punjab</option>
                <option>KPK</option>
              </select>
            </div>
            <div className="inputDiv">
              <div className="inputText">City</div>
              <input className="rentalInput" placeholder="City" />
            </div>
            <div className="inputDiv">
              <div className="inputText">Address</div>
              {/* <input className="rentalInput" /> */}
              <select className="rentalSelectInput">
                <option hidden>Address</option>
                <option>Federal B Area Block 16</option>
                <option>Federal B Area Block 17</option>
              </select>
            </div>
          </div>
          <div className="addCategoryFirstDiv">
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Phone Number</div>
              <input
                className="categoryNameInput"
                placeholder="Phone Number"
                type="number"
              />
            </div>
            <div className="categoryNameDiv">
              <div className="catogeryNameText">CNIC No</div>
              <input
                className="categoryNameInput"
                placeholder="CNIC No"
                type="number"
              />
            </div>
          </div>
          <div>
            <div className="inputText marginTop">Upload Images</div>
          </div>
          <div>
            {/* <input
            type="file"
            multiple={true}
            //   accept="image/*"
            onChange={(e) => {
              console.log(e.target.files);
            }}
            // className="chooseFileBtn"
          /> */}
            <button className="chooseFileBtn">Choose Files</button>
          </div>

          {/* <img src={selectedImg} style={{ width: 20, height: 20 }} /> */}
          <button className="chooseFileBtn">Save Changes</button>
        </div>
      </div>
    </>
  );
};
export default Profile;
