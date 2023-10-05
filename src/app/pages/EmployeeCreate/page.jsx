"use client";

import App from "@/app/components/table/page";

import axios from "axios";
import { useEffect, useState } from "react";
const columns = [
  { name: "Дугаар", uid: "id", sortable: true },
  { name: "Овог", uid: "lastname", sortable: true },
  { name: "Нэр", uid: "firstname", sortable: true },
  { name: "Албан тушаал", uid: "position", sortable: true },
  { name: "Дэд эрх", uid: "permission" },
  { name: "И-Мэйл", uid: "email" },
  { name: "Утас", uid: "phonenumber", sortable: true },
  { name: "Төлөв", uid: "status", sortable: true },
  { name: "Үйлдэл", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

function EmployeeTable() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("/server/api/employee")
      .then((res) => {
        setEmployee(res.data.employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <App
      tableName="Ажилтан"
      AddFieldName="Ажилтан нэмэх"
      users={employee}
      columns={columns}
      statusOptions={statusOptions}
    />
  );
}

export default EmployeeTable;
