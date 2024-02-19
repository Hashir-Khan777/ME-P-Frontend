import React, { useState } from "react";
import styles from "./style.module.css";

export default function BuyerProfile() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState("Ahsan");
  const [email, setEmail] = useState("abcstore@gmail.com");
  const [number, setNumber] = useState("23/05/2000");
  const [DOB, setDOB] = useState("Ahsan");
  const [streetAddress, setStreetAddress] = useState(
    "Sagheer Center FB Area Block 16"
  );

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    console.log(selectedFile.name);
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
    <div className={styles.container}>
      <div className={styles.addRentalContainer}>
        <div className={styles.addRentalText}>Profile Settings</div>
        <div className={styles.addCategoryFirstDiv}>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>Name</div>
            <input
              className={styles.categoryNameInput}
              placeholder="Name"
              value={name}
            />
          </div>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>Email</div>
            <input
              className={styles.categoryNameInput}
              placeholder="Email"
              value={email}
            />
          </div>
        </div>

        <div className={styles.addCategoryFirstDiv}>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>Phone Number</div>
            <input
              className={styles.categoryNameInput}
              placeholder="Phone Number"
              type="text"
              value={number}
            />
          </div>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>DOB</div>
            <input
              className={styles.categoryNameInput}
              placeholder="DOB"
              type="text"
              value={DOB}
            />
          </div>
        </div>

        <div className={styles.addCategoryFirstDiv}>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>Street Address</div>
            <input
              className={styles.categoryNameInput}
              placeholder="Phone Number"
              type="text"
              value={streetAddress}
            />
          </div>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>City</div>
            <select className={styles.categoryNameInput}>
              <option>Karachi</option>
              <option>Punjab</option>
              <option>Islamabad</option>
              <option>Balochistan</option>
            </select>
            {/* <input
              className={styles.categoryNameInput}
              placeholder="DOB"
              type="text"
            /> */}
          </div>
        </div>
        <div>
          <div
            className={styles.inputText}
            //   " marginTop"
          >
            Profile Picture
          </div>
        </div>
        <div>
          <input
            type="file"
            id="fileInput"
            accept=".jpg, .jpeg, .png, .gif"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
          <label htmlFor="fileInput" className={styles.chooseFileBtn}>
            Upload Image
          </label>
          {selectedImg && <span className={styles.textImg}>1.png</span>}
        </div>
        <div className={styles.selectedImgDiv}>
          {selectedImg && (
            <img src={selectedImg} className={styles.selectedImg} />
          )}
          <button
            style={{ marginTop: "10px" }}
            className={styles.chooseFileBtn}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
