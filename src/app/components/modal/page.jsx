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
import SelectComponent from "../select/page";
import { positionData, permissionData, statusData } from "./data";
import axios from "axios";

export default function ModalComponent(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [ovog, setOvog] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [position, setPosition] = useState("");
  const [permission, setPermission] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onchangeOvog = (e) => {
    setOvog(e.target.value);
  };
  const onchangeName = (e) => {
    setName(e.target.value);
  };
  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onchangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onSubmit = () => {
    console.log(ovog, name, position, permission, email, phoneNumber);
    axios
      .post("http://localhost:3000/server/api/employee", {
        firstname: name,
        lastname: ovog,
        position: position.currentKey,
        permission: permission.currentKey,
        status: status.currentKey,
        email: email,
        phonenumber: phoneNumber,
      })
      .then((res) =>
        alert(res.data.user.email + " tai hereglegch burtgegdlee ")
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
                  autoFocus
                  onChange={onchangeOvog}
                  label="Овог"
                  placeholder="Овог оруулна уу..."
                  variant="bordered"
                />
                <Input
                  onChange={onchangeName}
                  label="Нэр"
                  placeholder="Нэр оруулна уу..."
                  type="text"
                  variant="bordered"
                />
                <SelectComponent
                  FieldName="Албан тушаал"
                  placeholder="Албан тушаал оруулнө уу..."
                  onChange={setPosition}
                  data={positionData}
                  selectedKeys={position}
                />
                <SelectComponent
                  FieldName="Дэд эрх"
                  placeholder="Дэд эрх оруулнө уу..."
                  onChange={setPermission}
                  data={permissionData}
                  selectedKeys={permission}
                />
                <SelectComponent
                  FieldName="Статус"
                  placeholder="Статус сонгоно уу "
                  onChange={setStatus}
                  data={statusData}
                  selectedKeys={status}
                />
                <Input
                  onChange={onchangeEmail}
                  autoFocus
                  label="Имэйл хаяг"
                  placeholder="Имэйл хаяг оруулна уу..."
                  variant="bordered"
                />
                <Input
                  onChange={onchangePhoneNumber}
                  label="Утасны дугаар"
                  placeholder="Утасны дугаар оруулна уу..."
                  type="number"
                  pattern="[0-9]{10}"
                  maxLength="10"
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
