import React, { useEffect, useState } from "react";
import "./pendingQuerries.css";
import images from "../../utils/Images";
import Pagination from "../Pagination.js";

export default function PendingQuerries(props) {
  const { name } = props;
  const [data, setData] = React.useState([
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
    {
      name: "Syed Ahsan Ali",
      message:
        "I am willing to open my store, Can you please share the procedure",
      email: "syedahsan2305@gmail.com, Contact: 03125467894",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // console.log(name);
    if (name == "Recent Queries") {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(2);
    }
  }, []);

  return (
    <>
      <div className="pendingQuerriesContainer">
        <div
          className={
            name === "Recent Queries"
              ? "pendingQuerriesInsideContainerForDashboard"
              : "pendingQuerriesInsideContainer"
          }
        >
          <div className="pendingQuerriesHeading">{name}</div>
          {currentItems.map((item, index) => {
            return (
              <div className="pendingQuerriesMapDiv">
                <div className="pendingQuerriesMapDivText1">{item.name}</div>
                <div className="pendingQuerriesMapDiv1">
                  {name === "Recent Queries" ? (
                    <div className="pendingQueriesMsgText">
                      {`“${item.message}”`}
                      {/* <div className="pendingQueriesEmailText">{`Email:${item.email}`}</div> */}
                    </div>
                  ) : (
                    <div className="pendingQueriesMsgText">
                      {`“${item.message}”`}
                      <div className="pendingQueriesEmailText">{`Email:${item.email}`}</div>
                    </div>
                  )}
                  {name !== "Recent Queries" && (
                    <div className="pendingQuerriesReplyBtn">REPLY</div>
                  )}
                </div>
                {/* <div>line</div> */}
                <img
                  src={images.manageReviwLine}
                  className="pendingQuerriesLine"
                />
              </div>
            );
          })}
        </div>
        {name !== "Recent Queries" && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}
