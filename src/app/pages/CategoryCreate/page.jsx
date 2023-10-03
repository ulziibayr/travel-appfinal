"use client";

import App from "@/app/components/table/page";
import axios from "axios"; //huselt ywuuldag san
import { useEffect, useState } from "react";  //ene huudas neegdeh uyd ajilldag event 

const columns = [
  { name: "Дугаар", uid: "id", sortable: true },
  { name: "Овог", uid: "lastname", sortable: true },
  { name: "Нэр", uid: "firstname", sortable: true },
  { name: "Албан тушаал", uid: "position", sortable: true },
];


const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];




function employeesTable() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios.get("/server/api/category").then((res) => {setEmployee(res.data.employees)}).catch((err) => {console.log(err)});
  }, [])

  return <App tableName="Ажилтан" AddFieldName = "Ажилтан нэмэх" users={employee} columns={columns} statusOptions = {statusOptions}/>;
}

export default employeesTable;