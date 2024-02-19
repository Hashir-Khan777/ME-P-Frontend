import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { isFormValid } from "../../helpers";
import {
  createEquipment,
  uploadEquipmentImages,
} from "../../store/actions/equipment.action";
import { getCategories } from "../../store/actions/category.action";

export default function AddEquipment() {
  const [form, setForm] = useState({
    data: {
      equipment_name: "",
      model: "",
      year: "",
      make: "",
      category: "",
      location: "",
      sku: "",
      description: "",
      condition: "",
      price: "",
      images: [],
    },
  });

  const { categories } = useSelector((state) => state.CategoryReducer);
  const { images } = useSelector((state) => state.EquipmentReducer);

  const dispatch = useDispatch();
  const formData = new FormData();

  const submit = () => {
    if (!isFormValid(form.data, setForm).includes(false)) {
      setForm({
        ...form,
        data: {
          equipment_name: "",
          model: "",
          year: "",
          make: "",
          category: "",
          location: "",
          sku: "",
          condition: "",
          description: "",
          price: "",
          images: [],
        },
        errors: {},
      });
      dispatch(createEquipment(form.data));
    }
  };

  const uploadImages = (e) => {
    var files = e.target.files;
    for (var x = 0; x < files.length; x++) {
      formData.append("images", files[x]);
    }
    dispatch(uploadEquipmentImages(formData));
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

  return (
    <>
      <div className="addEquipmentPage">
        <div className="addRentalContainer">
          <div className="addRentalText">Add Equipment</div>
          <div className="addRentalFirst">
            <div className="inputDiv">
              <div className="inputText">Equipment Name</div>
              <input
                className="rentalInput"
                placeholder="Equipment Name"
                value={form.data.equipment_name}
                onChange={(e) => changeValue("equipment_name", e.target.value)}
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
              <div className="inputText">Category</div>
              <select
                className="rentalSelectInput"
                value={form.data.category}
                onChange={(e) => changeValue("category", e.target.value)}
              >
                <option hidden>Category</option>
                {categories?.map((category) => (
                  <option value={category?._id}>
                    {category?.category_name}
                  </option>
                ))}
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
                <option value="used">Used</option>
                <option value="new">New</option>
              </select>
            </div>
          </div>
          <div className="addCategoryFirstDiv"></div>
          <div>
            <div className="equipmentDisText">Description</div>
            <textarea
              className="equipmentDisInput"
              placeholder="Description"
              value={form.data.description}
              onChange={(e) => changeValue("description", e.target.value)}
            ></textarea>
          </div>
          <div>
            <div className="inputText marginTop">Upload Images</div>
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
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
