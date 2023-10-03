"use client"
import React from "react";

import NavbarComponent from "../../components/navbar/page";
import CardComponent from "../../components/card/page";

export default function HomeScreen() {
  return (
    <div>
      <NavbarComponent />
      {/* <ImagePage /> */}
      <CardComponent/>
     
    </div>
  );
}
