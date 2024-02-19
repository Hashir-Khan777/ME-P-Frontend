import React, { useEffect, useState } from "react";
import "./style.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DateTimePicker from "react-datetime-picker";
import HttpClient from "../../services/http-client";

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

const RentalModal = ({
  open,
  onClose,
  data,
  setOpen,
  previousRental,
  setData,
}) => {
  const [available_from, setavailable_from] = useState(new Date());
  const [end_date, setEnd_date] = useState(new Date());
  const [rental_name, setRental_name] = useState();
  const [model, setModel] = useState();
  const [year, setYear] = useState(); //number
  const [make, setMake] = useState();
  const [price, setPrice] = useState(); //number
  const [category, setCategory] = useState();
  const [location, setLocation] = useState();
  const [sku, setSku] = useState(); //number
  const [condition, setCondition] = useState();
  const [description, setDescription] = useState();
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    getAllCategories();
    setAllState();
  }, [data]);

  const setAllState = () => {
    setRental_name(data?.rental_name);
    setModel(data?.model);
    setPrice(data?.price);
    setYear(data?.year);
    setMake(data?.make);
    setSku(data?.sku);
    setCategory(data?.category);
    setLocation(data?.location);
    setCondition(data?.condition);
    setDescription(data?.description);
    setavailable_from(data?.available_from);
    setEnd_date(data?.end_date);
  };

  const getAllCategories = async () => {
    try {
      const response = await HttpClient.get("/api/category/");
      // console.log(response.data.categories);
      setAllCategory(response.data.categories);
    } catch (error) {
      console.log("allCategory-=-=-=-=error", error);
    }
  };

  const availableForm = (selectedDate) => {
    const formattedDate = selectedDate.toISOString();
    setavailable_from(formattedDate);
  };
  const handleEnd_date = (selectedDate) => {
    const formattedDate = selectedDate.toISOString();
    setEnd_date(formattedDate);
  };

  const handleUpdate = async () => {
    const obj = {
      rental_name,
      model,
      pricing_type: data?.pricing_type,
      year,
      make,
      price,
      category,
      location,
      sku,
      available_from,
      end_date,
      condition,
      description,
    };
    try {
      const response = await HttpClient.put(`/api/rental/${data._id}`, {
        rental_name,
        model,
        pricing_type: data?.pricing_type,
        year,
        make,
        price,
        category,
        location,
        sku,
        available_from,
        end_date,
        condition,
        description,
      });
      console.log("response", response.data.Rental);
      console.log("response", response.status);
      if (response.status === 200) {
        const updatedRental = response.data.Rental;
        handleChangeData(updatedRental);
        // alert("Rental update successfully!");
        // setOpen(false);
      }
    } catch (error) {
      console.log("error", error);
      alert(error.response.data.errors);
    }
  };
  const handleChangeData = (updatedRental) => {
    const index = previousRental.findIndex(
      (item) => item._id === updatedRental._id
    );
    const updatedNewRental = [...previousRental];
    updatedNewRental[index] = updatedRental;
    setData(updatedNewRental);
    alert("Rental update successfully!");
    setOpen(false);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <div className="MEMmodalContainer">
          <div className="MEMheading">Update Rentals</div>
          <div className="MEMFirst">
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Rental Name</div>
              <input
                className="MEMrentalInput"
                placeholder="Rental name"
                onChange={(e) => {
                  setRental_name(e.target.value);
                }}
                value={rental_name}
              />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Model</div>
              <input
                className="MEMrentalInput"
                placeholder="Model"
                onChange={(e) => {
                  setModel(e.target.value);
                }}
                value={model}
              />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Price</div>
              <input
                className="MEMrentalInput"
                placeholder="Price"
                type="number"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                value={price}
              />
            </div>
          </div>
          <div className="MEMFirst">
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Year</div>
              <input
                className="MEMrentalInput"
                placeholder="Year"
                type="number"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                value={year}
              />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Make</div>
              <input
                className="MEMrentalInput"
                placeholder="Make"
                onChange={(e) => {
                  setMake(e.target.value);
                }}
                value={make}
              />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">SKU</div>
              <input
                className="MEMrentalInput"
                placeholder="SKU"
                type="number"
                onChange={(e) => {
                  setSku(e.target.value);
                }}
                value={sku}
              />
            </div>
          </div>
          <div className="MEMFirst">
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Category</div>
              <select
                className="rentalSelectInput"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option hidden>Category</option>
                {allCategory &&
                  allCategory.map((item, index) => {
                    return (
                      <option key={index} value={item._id}>
                        {item.category_name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Location</div>
              <input
                className="MEMrentalInput"
                placeholder="Location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                value={location}
              />
            </div>
            <div className="MEMinputDiv2">
              <div className="MEMinputText">Condition</div>
              <select
                className="rentalSelectInput"
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                value={condition}
              >
                <option hidden>Condition</option>
                <option>used</option>
                <option>new</option>
              </select>
            </div>
          </div>
          <div className="MRMaddRentalFirst">
            <div className="inputDiv">
              <div className="inputText">Available From</div>
              {/* <input className="rentalInput" placeholder="Available from" /> */}
              <DateTimePicker
                onChange={availableForm}
                value={available_from}
                className={"dateTimePicker"}
              />
            </div>
            <div className="MRMinputDiv">
              <div className="inputText">End Date</div>
              {/* <input className="rentalInput" placeholder="End date" /> */}
              <DateTimePicker
                onChange={handleEnd_date}
                value={end_date}
                className={"dateTimePicker"}
              />
            </div>
          </div>
          <div>
            <div className="MEMequipmentDisText">Description</div>
            <textarea
              className="MRMequipmentDisInput"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            ></textarea>
          </div>
          <div>
            <div className="MEMinputText MEMmarginTop">Upload Images</div>
          </div>
          <div>
            <button className="MEMchooseFileBtn">Choose Files</button>
          </div>

          <div className="MRMmodalBtnDiv">
            <div
              className="MEMmodalUpdateBtn" //onClick={onClose}
              onClick={handleUpdate}
            >
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

export default RentalModal;
