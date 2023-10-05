"use client";
import App from "../../components/table/category"
import axios from "axios";
import { useEffect, useState } from "react";
const columns = [
  { name: "ID", uid: "categoryId", sortable: true },
  { name: "Категорийн нэр", uid: "categoryName", sortable: true },
  { name: "Үүсгэсэн", uid: "createdAt", sortable: true },
];
const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
];



function CategoryTable() {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("/server/api/category")
      .then((res) => {
        setCategory(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);


  return (
    <App
      tableName="Кателоги"
      AddFieldName="Кателоги нэмэх"
      category={Category}
      columns={columns}
      statusOptions={statusOptions}
    />
  );
}

export default CategoryTable;
