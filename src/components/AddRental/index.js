import React, { useEffect, useState } from "react";
import "./style.css";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/category.action";
import { isFormValid } from "../../helpers";
import {
  createRental,
  uploadRentalImages,
} from "../../store/actions/rentals.action";

export default function AddRental() {
  const [form, setForm] = useState({
    data: {
      rental_name: "",
      model: "",
      pricing_type: "",
      year: "",
      make: "",
      category: "",
      location: "",
      sku: "",
      description: "",
      condition: "",
      price: "",
      reserved: false,
      images: [],
      available_from: "",
      end_date: "",
    },
  });

  const { categories } = useSelector((state) => state.CategoryReducer);
  const { images } = useSelector((state) => state.RentalReducer);

  const dispatch = useDispatch();
  const formData = new FormData();

  const submit = () => {
    if (!isFormValid(form.data, setForm).includes(false)) {
      setForm({
        ...form,
        data: {
          rental_name: "",
          model: "",
          pricing_type: "",
          year: "",
          make: "",
          category: "",
          location: "",
          sku: "",
          description: "",
          condition: "",
          price: "",
          reserved: false,
          images: [],
          available_from: "",
          end_date: "",
        },
        errors: {},
      });
      dispatch(createRental(form.data));
    }
  };

  const uploadImages = (e) => {
    var files = e.target.files;
    for (var x = 0; x < files.length; x++) {
      formData.append("images", files[x]);
    }
    dispatch(uploadRentalImages(formData));
  };

  const changeValue = (key, value) =>
    setForm({
      ...form,
      data: {
        ...form.data,
        [key]: value,
      },
    });

  const availableForm = (selectedDate) => {
    const formattedDate = selectedDate.toISOString();
    changeValue("available_from", formattedDate);
  };
  const handleEnd_date = (selectedDate) => {
    const formattedDate = selectedDate.toISOString();
    changeValue("end_date", formattedDate);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (images.length) {
      changeValue("images", images);
    }
  }, [images]);

  return (
    <>
      <div className="addRentalContainer">
        <div className="addRentalText">Add Rentals</div>
        <div className="addRentalFirst">
          <div className="inputDiv">
            <div className="inputText">Rental Name</div>
            <input
              className="rentalInput"
              placeholder="Rental name"
              value={form.data.rental_name}
              onChange={(e) => changeValue("rental_name", e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <div className="inputText">Model</div>
            <input
              className="rentalInput"
              placeholder="Model"
              value={form.data.model}
              onChange={(e) => changeValue("model", e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <div className="inputText">Pricing Type </div>
            <select
              className="rentalSelectInput"
              value={form.data.pricing_type}
              onChange={(e) => changeValue("pricing_type", e.target.value)}
            >
              <option hidden>Pricing type</option>
              <option>monthly</option>
              <option>weekly</option>
              <option>daily</option>
            </select>
          </div>
        </div>
        <div className="addRentalFirst">
          <div className="inputDiv">
            <div className="inputText">Year</div>
            <input
              className="rentalInput"
              placeholder="Year"
              type="number"
              value={form.data.year}
              onChange={(e) => changeValue("year", e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <div className="inputText">Make</div>
            <input
              className="rentalInput"
              placeholder="Make"
              value={form.data.make}
              onChange={(e) => changeValue("make", e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <div className="inputText">Price</div>
            <input
              className="rentalInput"
              placeholder="Price"
              type="number"
              value={form.data.price}
              onChange={(e) => changeValue("price", e.target.value)}
            />
          </div>
        </div>
        <div className="addRentalFirst">
          <div className="inputDiv">
            <div className="inputText">Category</div>
            <select
              className="rentalSelectInput"
              value={form.data.category}
              onChange={(e) => changeValue("category", e.target.value)}
            >
              <option hidden>Category</option>
              {categories?.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.category_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="inputDiv">
            <div className="inputText">Location</div>
            <input
              className="rentalInput"
              placeholder="Location"
              value={form.data.location}
              onChange={(e) => changeValue("location", e.target.value)}
            />
          </div>
          <div className="inputDiv">
            <div className="inputText">SKU</div>
            <input
              className="rentalInput"
              placeholder="SKU"
              value={form.data.sku}
              onChange={(e) => changeValue("sku", e.target.value)}
            />
          </div>
        </div>
        <div className="addRentalFirst">
          <div className="inputDiv">
            <div className="inputText">Available From</div>
            <DateTimePicker
              onChange={availableForm}
              value={form.data.available_from}
              className={"dateTimePicker"}
            />
          </div>
          <div className="inputDiv">
            <div className="inputText">End Date</div>
            <DateTimePicker
              onChange={handleEnd_date}
              value={form.data.end_date}
              className={"dateTimePicker"}
            />
          </div>
          <div className="inputDiv">
            <div className="inputText">Condition</div>
            <select
              className="rentalSelectInput"
              value={form.data.condition}
              onChange={(e) => changeValue("condition", e.target.value)}
            >
              <option hidden>Condition</option>
              <option value="used">used</option>
              <option value="new">new</option>
            </select>
          </div>
        </div>
        <div>
          <div className="inputText">Reservation</div>
          <select
            className="rentalSelectInput"
            value={form.data.reserved}
            onChange={(e) => changeValue("reserved", e.target.value)}
          >
            <option hidden>Reservation</option>
            <option value={true}>Reserved</option>
            <option value={false}>Not Reserved</option>
          </select>
        </div>
        <div>
          <div className="addRentalDisText">Description</div>
          <textarea
            className="ARcategoryDisInput"
            placeholder="Description"
            value={form.data.description}
            onChange={(e) => changeValue("description", e.target.value)}
          ></textarea>
        </div>
        <div>
          <div className="inputText">Upload Images</div>
        </div>
        <div>
          {/* <button className="chooseFileBtn">Choose Files</button> */}
          <input
            className="chooseFileBtn"
            multiple
            type="file"
            onChange={uploadImages}
          />
        </div>
        <button className="chooseFileBtn" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}
