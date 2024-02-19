import React, { useState } from "react";
import "./style.css";
import { isFormValid } from "../../helpers";
import { createCategory } from "../../store/actions/category.action";
import { useDispatch } from "react-redux";

export default function AddCategory() {
  const [form, setForm] = useState({
    data: {
      category_name: "",
      slug: "",
      description: "",
    },
  });

  const dispatch = useDispatch();

  const submit = () => {
    if (!isFormValid(form.data, setForm).includes(false)) {
      setForm({
        ...form,
        data: { category_name: "", slug: "", description: "" },
        errors: {},
      });
      dispatch(createCategory(form.data));
    }
  };

  const changeValue = (key, value) =>
    setForm({
      ...form,
      data: {
        ...form.data,
        [key]: value,
      },
    });

  return (
    <>
      <div className="addCategoryPage">
        <div className="categoryForm">
          <div className="addCategoryText">Add Category</div>
          <div className="addCategoryFirstDiv">
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Category Name</div>
              <input
                onChange={(e) => changeValue("category_name", e.target.value)}
                className="AddCategoryNameInput"
                placeholder="Category Name"
                value={form.data.category_name}
              />
            </div>
            <div className="categoryNameDiv">
              <div className="catogeryNameText">Slug</div>
              <input
                className="AddCategoryNameInput"
                placeholder="Slug"
                onChange={(e) => changeValue("slug", e.target.value)}
                value={form.data.slug}
              />
            </div>
          </div>
          <div>
            <div className="catogeryDisText">Description</div>
            <textarea
              className="categoryDisInput"
              placeholder="Description"
              onChange={(e) => changeValue("description", e.target.value)}
              value={form.data.description}
            ></textarea>
          </div>
          <button className="submitBtn" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
