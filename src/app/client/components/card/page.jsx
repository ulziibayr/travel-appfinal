"use client";
import React, { useState, useEffect } from "react";
import FilterComponent from "../filter/page";
import axios from "axios";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Chip,

} from "@nextui-org/react";
export default function CardComponent() {
  
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
   
  <div className="flex flex-col lg:flex-row mt-10 px-5">
  <FilterComponent/>
  <div className="flex-auto w-100">
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 sm: lg:grid-cols-4 ps:0 lg:ps-5">
          {product.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="sm"
                  width="100%"
                  alt={item.productName}
                  className="w-full object-cover h-[140px]"
                  src={item.productImg} />
                  <div className="absolute p-3 bottom-0 right-1 z-10 grid justify-items-end opacity-50 hover:opacity-100">
                   <Chip>Сүлжээтэй эсэх {item.productWifi}</Chip>
                  </div>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.productName} </b>
                <p className="text-default-500">{item.productPrice}₮</p>
                
              </CardFooter>
            </Card>
          ))}
        </div>
  </div>
  </div>
  
  );
}
