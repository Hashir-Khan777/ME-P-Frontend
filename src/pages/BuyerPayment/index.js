import React, { useState } from "react";
import styles from "./style.module.css";

export default function BuyerPayment() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [accountTitle, setAccountTitle] = useState("Syed Ahsan Ali");
  const [accountNumber, setAccountNumber] = useState("0185000000");
  const [bankName, setBankName] = useState("Meezan Bank Pvt. Ltd");
  const [branchCode, setBranchCode] = useState("0193");
  const [ibnaNum, setIbnaNum] = useState("PKA00000000000");

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
            <div className={styles.catogeryNameText}>Account Title</div>
            <input
              className={styles.categoryNameInput}
              placeholder="Account Title"
              value={accountTitle}
            />
          </div>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>Account Number</div>
            <input
              className={styles.categoryNameInput}
              placeholder="Account Number"
              value={accountTitle}
            />
          </div>
        </div>

        <div className={styles.addCategoryFirstDiv}>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>Bank Name</div>
            <select className={styles.categoryNameInput}>
              <option>Meezan Bank Pvt. Ltd</option>
              <option>Alfalah Bank Pvt. Ltd</option>
              <option>Habib Bank Pvt. Ltd</option>
              <option>UBL Bank Pvt. Ltd</option>
            </select>
            {/* <input
              className={styles.categoryNameInput}
              placeholder="Bank Name"
              type="text"
              value={bankName}
            /> */}
          </div>
          <div className={styles.categoryNameDiv}>
            <div className={styles.catogeryNameText}>Branch Code</div>
            <input
              className={styles.categoryNameInput}
              placeholder="Branch Code"
              type="text"
              value={branchCode}
            />
          </div>
        </div>

        <div className={styles.addCategoryFirstDiv}>
          <div className={styles.IBNAInputDiv}>
            <div className={styles.catogeryNameText}>
              IBAN (E.g : PK00AAA000000000000)
            </div>
            <input
              className={styles.IBNAInput}
              placeholder="PKA00000000000"
              type="text"
              value={ibnaNum}
            />
          </div>
          {/* <div className={styles.IBNAInputDiv}>
            <div className={styles.catogeryNameText}>City</div>
            <select className={styles.categoryNameInput}>
              <option>Karachi</option>
              <option>Punjab</option>
              <option>Islamabad</option>
              <option>Balochistan</option>
            </select>
          </div> */}
        </div>
        <div>
          <div
            className={styles.inputText}
            //   " marginTop"
          >
            Upload Cheque Copy (Allows Image files, PDF & MS Word)
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
          {/* {selectedImg && (
            <img src={selectedImg} className={styles.selectedImg} />
          )} */}
          <button
            style={{ marginTop: "30px" }}
            className={styles.chooseFileBtn2}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
