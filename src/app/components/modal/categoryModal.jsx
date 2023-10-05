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
  Link,
} from "@nextui-org/react";
import { PlusIcon } from "../table/plusIcon";
import axios from "axios";

export default function categoryModalComponent(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [categoryName, setcategoryName] = useState("");
  const [categoryId, setcategoryId] = useState("");
  

  const onchangecategoryName = (e) => {
    setcategoryName(e.target.value);
  };
  const onchangecategoryId = (e) => {
    setcategoryId(e.target.value);
  };
  

  const onSubmit = () => {
  
    axios
      .post("http://localhost:3000/server/api/category", {
        categoryName: categoryName,
        categoryId: categoryId,
      })
      .then((res) =>
        alert(res.data.category.categoryName + " nemegdlee ")
      )
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
                  onChange={onchangecategoryName}
                  label="Категорийн нэр"
                  placeholder="Категорийн нэр оруулна уу..."
                  type="text"
                  variant="bordered"
                />
                    <Input
                  onChange={onchangecategoryId}
                  label="Id"
                  placeholder="Тоо оруулна уу..."
                  type="number"
                  variant="bordered"
                />
               
             
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
