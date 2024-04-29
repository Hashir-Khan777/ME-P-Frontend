import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty, isFormValid } from "../../helpers";
import { createPart, uploadPartImages } from "../../store/actions/parts.action";
import { getCategories } from "../../store/actions/category.action";

export default function AddParts() {
  const [form, setForm] = useState({
    data: {
      product_title: "",
      make: "",
      price: "",
      category: "",
      location: "",
      condition: "",
      description: "",
      store: "",
      images: [],
    },
  });

  const { store } = useSelector((state) => state.StoreReducer);

  const { categories } = useSelector((state) => state.CategoryReducer);
  const { images } = useSelector((state) => state.PartReducer);

  const dispatch = useDispatch();
  const formData = new FormData();

  const submit = () => {
    if (!isFormValid(form.data, setForm).includes(false)) {
      setForm({
        ...form,
        data: {
          product_title: "",
          make: "",
          price: "",
          category: "",
          location: "",
          condition: "",
          description: "",
          images: [],
        },
        errors: {},
      });
      dispatch(createPart(form.data));
    }
  };

  const uploadImages = (e) => {
    var files = e.target.files;
    for (var x = 0; x < files.length; x++) {
      formData.append("images", files[x]);
    }
    dispatch(uploadPartImages(formData));
  };

  const changeValue = (key, value) =>
    setForm({
      ...form,
      data: {
        ...form.data,
        [key]: value,
      },
    });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (images.length) {
      changeValue("images", images);
    }
  }, [images]);

  useEffect(() => {
    if (!isEmpty(store)) {
      setForm({ ...form, data: { ...form.data, store: store?._id } });
    }
  }, [store]);

  return (
    <>
      <div className="addRentalContainer">
        <div className="addRentalText">Add Parts</div>
        <div className="addRentalFirst">
          <div className="inputDiv">
            <div className="inputText">Product Title</div>
            <input
              className="rentalInput"
              placeholder="Product title"
              value={form.data.product_title}
              onChange={(e) => changeValue("product_title", e.target.value)}
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
              value={form.data.price}
              onChange={(e) => changeValue("price", e.target.value)}
            />
          </div>
        </div>
        <div className="addRentalFirst">
          <div className="inputDiv">
            <div className="inputText">Category</div>
            {/* <input className="rentalInput" /> */}
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
            <div className="inputText">Condition</div>
            {/* <input className="rentalInput" /> */}
            <select
              className="rentalSelectInput"
              value={form.data.condition}
              onChange={(e) => changeValue("condition", e.target.value)}
            >
              <option hidden>Condition</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
        </div>
        <div>
          <div className="addRentalDisText">Description</div>
          {/* <input className="addRentalDisInput" /> */}
          <textarea
            className="addPartsDisInput"
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

        {/* <img src={selectedImg} style={{ width: 20, height: 20 }} /> */}
        <button className="chooseFileBtn" onClick={submit}>
          Submit
        </button>
      </div>
    </>
  );
}
