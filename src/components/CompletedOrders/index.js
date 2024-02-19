import React, { useState } from "react";
import "./style.css";
import newOrderImg from "../../assets/newOrderImg.png";
import eyeImg from "../../assets/eyeImg.png";
import Pagination from "../Pagination.js";

const CompletedOrders = (props) => {
  const [data, setData] = useState([
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://media.istockphoto.com/id/1212230930/photo/car-engine-parts.jpg?s=612x612&w=0&k=20&c=YCG4lzjxDYTFQQ-gOniW-r-Xl-th73hBOrcnvdiU274=",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/car-parts-motor-gear-close-up-air-filter-52556200.jpg",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://5.imimg.com/data5/QT/QF/MY-3530642/tata-truck-metal-body-parts-500x500.jpg",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaa-NmnH6HCLKgOvdHe-EoqI_poAKGNs6Fg&usqp=CAU",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://image.made-in-china.com/202f0j00gFlVWCAISLqJ/Auto-Spare-Parts-for-European-American-Japanese-Trucks.webp",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://image.made-in-china.com/202f0j00gFlVWCAISLqJ/Auto-Spare-Parts-for-European-American-Japanese-Trucks.webp",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://as1.ftcdn.net/v2/jpg/02/60/60/32/1000_F_260603282_fyJlxXFT9azi0LIblm6671DVKdNfwqSR.jpg",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcamKAFdeWt7gQOp5hjBgTji-wAlJIbelIw&usqp=CAU",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/005/093/029/non_2x/realistic-car-parts-truck-tire-aluminum-wheel-disc-engine-piston-in-vintage-style-baner-of-the-auto-cargo-industry-repair-service-template-sales-of-spare-parts-vector.jpg",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNnpIEMYwdWtLzAStb5OzM1k6uoYGud3VuQ&usqp=CAU",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwKcY60TYJCuFcPYs4yFsL_BDwRyZr4kRuw&usqp=CAU",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7HB1lVtQofeqLmbYL4QAgjrvpmqNA4SKyQ&usqp=CAU",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSL9sWRRjHzZ71PcFOri21wSXeZQm598GsdyVQT6oe8hJ40dJN42KKyAb0ZWbXw4c3SYs&usqp=CAU",
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="headingText">{props.prop1}</div>
          <div className="headeingMainDiv">
            <div className="product">PRODUCT</div>
            <div className="quantity">QUANTITY</div>
            <div className="price">PRICE</div>
            <div className="date">DATE</div>
            <div className="eyeIcon"></div>
          </div>
          <div>
            {currentItems.map((item, index) => {
              return (
                <div className="headeingMainDiv">
                  <div className="mapImgDiv">
                    <img src={item.image} className="productImg" />
                    <div className="mapImgTextDiv">
                      <span className="text1">{item.name}</span>
                      <span className="text2">{`orderBy:${item.orderBy}`}</span>
                    </div>
                  </div>
                  <div className="mapQuantityText">{item.quantity}</div>
                  <div className="mapPriceText">{item.price}</div>
                  <div className="mapDateText">{item.date}</div>
                  {/* <div className="eyeIcon"></div> */}
                  <div className="eyeImgDiv">
                    <img src={eyeImg} className="eyeImg" />
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
      </div>
    </>
  );
};
export default CompletedOrders;
