import React from "react";

import {
  CheckboxGroup,
  Checkbox,
  Input,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { CustomCheckbox } from "./CustomCheckbox";
export default function FilterComponent() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  const [groupSelected, setGroupSelected] = React.useState([]);
  const checkboxlist = [
    {
      label: "*",
      value: "1",
    },
    {
      label: "**",
      value: "2",
    },
    {
      label: "***",
      value: "3",
    },
    {
      label: "****",
      value: "4",
    },
    {
      label: "*****",
      value: "5",
    },
  ];
  

  return (
    
      <div
        shadow="sm"
        className="w-100 lg:w-[350px] h-auto p-5 mb-5 bg-white rounded-large"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap md:mb-0 gap-4 mt-5">
              <Input key="" type="search" label="Хайх" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-3">
          <Accordion
            variant="bordered"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <AccordionItem key="1" aria-label="Зэрэглэл" title="Зэрэглэл">
              <CheckboxGroup defaultValue={["buenos-aires", "london"]}>
                {checkboxlist.map((checkbox, index) => (
                  <Checkbox value={checkbox.value}>{checkbox.label}</Checkbox>
                ))}
              </CheckboxGroup>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Өрөөний тоо" title="Өрөөний тоо">
              <CheckboxGroup defaultValue={["buenos-aires", "london"]}>
                <Checkbox value="1 Өрөө">1 Өрөө</Checkbox>
                <Checkbox value="2 Өрөө">2 Өрөө</Checkbox>
                <Checkbox value="3 Өрөө">3 Өрөө</Checkbox>
              </CheckboxGroup>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col gap-1 w-full">
            <CheckboxGroup
              className="gap-1"
              label="Боломжтой зүйлс"
              orientation="horizontal"
              value={groupSelected}
              onChange={setGroupSelected}
            >
              <CustomCheckbox value="wifi">Wifi</CustomCheckbox>
              <CustomCheckbox value="tv">TV</CustomCheckbox>
              <CustomCheckbox value="kitchen">Kitchen</CustomCheckbox>
              <CustomCheckbox value="parking">Parking</CustomCheckbox>
              <CustomCheckbox value="pool">Pool</CustomCheckbox>
              <CustomCheckbox value="gym">Gym</CustomCheckbox>
            </CheckboxGroup>
          <p className="mt-4 ml-1 text-default-500">
            Сонгогдсон: {groupSelected.join(", ")}
          </p>
        </div>
      </div>

      
    
  );
}
