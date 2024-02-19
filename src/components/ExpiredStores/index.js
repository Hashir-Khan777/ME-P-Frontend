import React, { useState } from "react";
import "./ExpiredStore.css";
import images from "../../utils/Images";
import Pagination from "../Pagination.js/index.js";
import ExpireStoresModal from "../ExpireStoreModa";

export default function ExpiredStores(props) {
  const { name } = props;
  const [data, setData] = useState([
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      expireDate: "14/06/23",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleOpen = (item) => {
    // console.log(item);
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <div className="expireStoresContainer">
          <div className="expiredStoresHeading">{name}</div>
          <div className="newStoresDataHeadingMain">
            <div className="expiredStoresDataHeadingMainChild">Store ID</div>
            <div className="expiredStoresDataHeadingMainChild2">Store Name</div>
            <div className="expiredStoresDataHeadingMainChild">Plan</div>
            <div className="expiredStoresDataHeadingMainChild2">PRICE</div>
            <div className="expiredStoresDataHeadingMainChild">
              EXPIRED DATE
            </div>
            <div></div>
          </div>
          <div>
            {currentItems.map((item, index) => {
              return (
                <div className="expiredStoresDataMapgMain">
                  <div className="expiredStoresDataMapMainChild">
                    {item.storeId}
                  </div>
                  <div className="expiredStoresDataMapMainChild2Red">
                    {item.storeName}
                  </div>
                  <div className="expiredStoresDataMapMainChild">
                    {item.plan}
                  </div>
                  <div className="expiredStoresDataMapMainChild2">
                    {item.price}
                  </div>
                  <div className="expiredStoresDataMapMainChild">
                    {item.expireDate}
                  </div>
                  <div>
                    <img
                      src={images.eyeImg}
                      className="expiredStoresEyeImg"
                      onClick={() => {
                        handleOpen(item);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <ExpireStoresModal
          open={open}
          onClose={handleClose}
          title={"Expire Store Details"}
          selectedItem={selectedItem}
        />
      </div>
    </>
  );
}
