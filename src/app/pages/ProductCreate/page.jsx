"use client";
import App from "../../components/table/productTable"
import axios from "axios";
import { useEffect, useState } from "react";
const columns = [
  { name: "ID", uid: "productId", sortable: true },
  { name: "Зураг", uid: "productImg", sortable: true },
  { name: "Нэр", uid: "productName", sortable: true },
  { name: "Үнэ", uid: "productPrice", sortable: true },
  { name: "Байршил", uid: "productLocation", sortable: true },
  { name: "Wifi", uid: "productWifi", sortable: true },
];
const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
];



function ProductTable() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/server/api/product")
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);


  return (
    <App
      tableName="Бүтээдэхүүн"
      AddFieldName="Бүтээдэхүүн нэмэх"
      product={product}
      columns={columns}
      statusOptions={statusOptions}
    />
  );
}

export default ProductTable;
