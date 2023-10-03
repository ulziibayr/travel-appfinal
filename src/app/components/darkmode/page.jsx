'use client';
import React from "react";

import { Badge, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { DarkIcon } from "./dark";
import { LightIcon } from "./light";

const App = (props) => {
  const { Component, isSelected, getBaseProps, getInputProps } =
    useSwitch(props);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Component {...getBaseProps()}>
          <Badge color="danger" isInvisible={false} shape="circle">
            <VisuallyHidden>
              <input {...getInputProps()} />
            </VisuallyHidden>
            {isSelected ? (
              <DarkIcon className="fill-current" size={30} />
            ) : (
              <LightIcon className="fill-current" size={30} />
            )}
          </Badge>
        </Component>
      </div>
    </div>
  );
};

export default App;
