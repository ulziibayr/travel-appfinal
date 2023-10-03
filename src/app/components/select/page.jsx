'use client';
import React from "react";

import { Select, SelectItem } from "@nextui-org/react";

export default function SelectComponent(props) {
  return (
    <div className="flex flex-col gap-1">
      <Select
        label={props.FieldName}
        variant="bordered"
        placeholder={props.placeholder}
        selectedKeys={props.selectedKeys}
        className="max-w-[400px]"
        onSelectionChange={props.onChange}
      >
        {props.data.map((data) => (
          <SelectItem key={data.value} value={data.value}>
            {data.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
