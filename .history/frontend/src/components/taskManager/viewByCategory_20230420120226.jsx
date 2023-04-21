import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CategoryTasks from "./categoryTasks";

const ViewByCategory = ({ tasks }) => {
  const categories = ["Work", "Personal", "Finance", "Others"];

  return (
    <div>
      <h2>View By Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      {categories.map((category) => (

      ))}
    </div>
  );
};

export default ViewByCategory;
