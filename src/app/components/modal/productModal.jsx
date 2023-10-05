"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Link,
} from "@nextui-org/react";
import { PlusIcon } from "../table/plusIcon";
import axios from "axios";

export default function ModalComponent(props) {
   const wifi = [
    {label: "Сүлжээтэй", value: "Сүлжээтэй"},
    {label: "Сүлжээгүй", value: "Сүлжээгүй"} ];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [productId, setproductId] = useState("");
  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productLocation, setproductLocation] = useState("");
  const [productWifi, setproductWifi] = useState("");
  const [productImg, setproductImg] = useState("");

  const onchangeproductId = (e) => {
    setproductId(e.target.value);
  };
  const onchangeproductName = (e) => {
    setproductName(e.target.value);
  };
  const onchangeproductPrice = (e) => {
    setproductPrice(e.target.value);
  };
  const onchangeproductLocation = (e) => {
    setproductLocation(e.target.value);
  };
  const onchangeproductWifi = (e) => {
    setproductWifi(e.target.value);
  };
  const onchangeproductImg = (e) => {
    setproductImg(e.target.value);
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:3000/server/api/product", {
        productId: productId,
        productName: productName,
        productPrice: productPrice,
        productLocation: productLocation,
        productWifi: productWifi,
        productImg: productImg,
      })
      .then((res) => alert(res.data.product.productName + " nemegdlee "))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        endContent={<PlusIcon />}
        size="sm"
      >
        {props.addFieldName}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Нэмэх</ModalHeader>
              <ModalBody>
                <Input
                  onChange={onchangeproductId}
                  label="Бүтээгдэхүүний дугаар "
                  placeholder="Бүтээгдэхүүний id оруулна уу..."
                  type="number"
                  variant="bordered"
                />
                <Input
                  onChange={onchangeproductName}
                  label="Бүтээгдэхүүний нэр"
                  placeholder="Бүтээгдэхүүний нэр оруулна уу..."
                  type="text"
                  variant="bordered"
                />
                <Input
                  onChange={onchangeproductPrice}
                  label="Бүтээгдэхүүний үнэ"
                  placeholder="Бүтээгдэхүүний үнэ оруулна уу..."
                  type="number"
                  variant="bordered"
                />
                <Input
                  onChange={onchangeproductLocation}
                  label="Бүтээгдэхүүний байршил нэр"
                  placeholder="Бүтээгдэхүүний байршил оруулна уу..."
                  type="text"
                  variant="bordered"
                />
                <Input
                  onChange={onchangeproductImg}
                  label="Зураг оруулна уу "
                  placeholder="Url оруулна уу"
                  type="text"
                  variant="bordered"
                />
                <Select  onChange={onchangeproductWifi} label="Сүлжээтэй эсэх" placeholder="Сонгоно уу " selectedKeys={"1"}>
                  {wifi.map((wifi) => (
                    <SelectItem key={wifi.value} value={wifi.value}>
                      {wifi.label}
                    </SelectItem>
                  ))}
                </Select>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Болих
                </Button>
                <Button color="primary" onPress={onClose} onClick={onSubmit}>
                  Бүртгэх
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
