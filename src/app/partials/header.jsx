"use client";
import { useContext, useState } from "react";
import UserContext from "../context/userContext";
import DropDownComponent from "../components/dropdown/page";
import NotificationComponent from "../components/notification/page";
import DarkModeIcon from "../components/darkmode/page";

function Header() {
  const contextDate = useContext(UserContext);
  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8 pl-4">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex items-start">
            <button
              type="button"
              className="btn btn-sm fs-16 header-item vertical-menu-btn"
              onClick={() => contextDate.setOpen(!contextDate.open)}
            >
              <span
                className={`${!contextDate.open ? "open" : ""} hamburger-icon `}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
          <div className="flex space-x-4 absolute right-4">
            <div className="relative inline-flex">
              <NotificationComponent />
            </div>
            <div className="relative inline-flex">
              <DarkModeIcon />
            </div>
            <hr className="w-px h-10 bg-slate-200 dark:bg-slate-700 border-none" />
            <div className="relative inline-flex">
              <DropDownComponent />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
