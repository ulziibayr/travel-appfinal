"use client";
import React, { useState } from "react";

const UserContext = React.createContext();

export const UserStore = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <UserContext.Provider
      value={{
        setOpen,
        open,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
