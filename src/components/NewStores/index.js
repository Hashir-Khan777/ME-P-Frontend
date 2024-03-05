import React, { useEffect, useState } from "react";
import "./newStores.css";
import images from "../../utils/Images";
import Pagination from "../Pagination.js";
import NewStoresModal from "../NewStoresModal";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "../../store/actions/store.action";

export default function NewStores(props) {
  const { name } = props;
  const [data, setData] = useState([
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
    {
      storeId: "118",
      storeName: "The Excavators",
      plan: "Premium",
      price: "Rs 20000",
      date: "14/06/23",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const { stores } = useSelector((state) => state.StoreReducer);

  const currentItems = stores.slice(indexOfFirstItem, indexOfLastItem);

  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleOpen = (item) => {
    // console.log(item);
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getStores());
  }, []);

  return (
    <>
      <div>
        <div
          className={
            name === "Recent Stores"
              ? "newStoresContainerForDashboard"
              : "newStoresContainer"
          }
        >
          <div className="newStoresHeading">{name}</div>
          <div className="newStoresDataHeadingMain">
            <div
              className={
                name === "Recent Stores"
                  ? "newStoresDataHeadingMainChildForDash"
                  : "newStoresDataHeadingMainChild"
              }
            >
              Store ID
            </div>
            <div className="newStoresDataHeadingMainChild2">Store Name</div>
            <div
              className={
                name === "Recent Stores"
                  ? "newStoresDataHeadingMainChildForDash"
                  : "newStoresDataHeadingMainChild"
              }
            >
              Address
            </div>
            <div className="newStoresDataHeadingMainChild2">POSTAL CODE</div>
            <div
              className={
                name === "Recent Stores"
                  ? "newStoresDataHeadingMainChildForDash"
                  : "newStoresDataHeadingMainChild"
              }
            >
              DATE
            </div>
            {name !== "Recent Stores" && (
              <div
              //   className="newStoresDataHeadingMainChild"
              ></div>
            )}
          </div>
          <div>
            {currentItems.map((item, index) => {
              return (
                <div className="newStoresDataMapgMain">
                  <div
                    className={
                      name === "Recent Stores"
                        ? "newStoresDataHeadingMainChildWithML"
                        : "newStoresDataMapMainChild"
                    }
                  >
                    {item._id}
                  </div>
                  <div className="newStoresDataMapMainChild2">{item.name}</div>
                  <div
                    className={
                      name === "Recent Stores"
                        ? "newStoresDataHeadingMainChildWithML"
                        : "newStoresDataMapMainChild"
                    }
                  >
                    {item.address}
                  </div>
                  <div className="newStoresDataMapMainChild2">
                    {item.postalCode}
                  </div>
                  <div
                    className={
                      name === "Recent Stores"
                        ? "newStoresDataHeadingMainChildWithML"
                        : "newStoresDataMapMainChild"
                    }
                  >
                    {new Date(item.createdAt).toLocaleString("en-CA")}
                  </div>
                  {name !== "Recent Stores" && (
                    <div
                    //   style={{ backgroundColor: "red" }}
                    // className="newStoresDataHeadingMainChild"
                    >
                      <img
                        src={images.eyeImg}
                        className="newStoresEyeImg"
                        onClick={() => {
                          handleOpen(item);
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {name !== "Recent Stores" && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
        <NewStoresModal
          open={open}
          onClose={handleClose}
          title={"New Store Details"}
          selectedItem={selectedItem}
        />
      </div>
    </>
  );
}
