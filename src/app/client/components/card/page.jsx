import React from "react";
import FilterComponent from "../filter/page";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Chip
} from "@nextui-org/react";
export default function CardComponent() {
  const list = [
    {
      title: "Orange",
      img: "https://image.wedmegood.com/resized/540X/uploads/member/3063624/1652433841_Annotation_2022_05_13_144911.jpg",
      price: "$5.50",
      star: "1",
    },
    {
      title: "Tangerine",
      img: "https://149345965.v2.pressablecdn.com/wp-content/uploads/img-hotels-country-inn-hotel.jpg",
      price: "$3.00",
      star: "1",
    },
    {
      title: "Raspberry",
      img: "https://www.imgacademy.com/sites/default/files/legacyhotel.jpg",
      price: "$10.00",
      star: "3",
    },
    {
      title: "Lemon",
      img: "https://www.newzealand.com/assets/Operator-Database/img-1652959660-6127-25310-Alpine_Twin_IMG_1048__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.JPG",
      price: "$5.30",
      star: "5",
    },


  ];
  return (
   
  <div className="flex flex-col lg:flex-row mt-10 px-5">
  <FilterComponent/>
  <div className="flex-auto w-100">
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-3 sm: lg:grid-cols-4 ps:0 lg:ps-5">
          {list.map((item, index) => (
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
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img} />
                  <div className="absolute p-3 bottom-0 right-1 z-10 grid justify-items-end opacity-50 hover:opacity-100">
                   <Chip>Үнэлгээ {item.star}</Chip>
                  </div>
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title} </b>
                <p className="text-default-500">{item.price}</p>
                
              </CardFooter>
            </Card>
          ))}
        </div>
  </div>
  </div>
  
  );
}
