"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SubMenu = ({ data, open }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div
      className="rounded-md  items-center md:cursor-pointer cursor-default duration-300   "
      onClick={() => setSubMenuOpen(!subMenuOpen)}
    >
      <div
        className="menu-collapse-item text-transparent-8"
        role="presentation"
      >
        <span className="flex items-center">
          <span className="text-2xl mr-2 text-transparent-5">
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </span>
          {open ? <span>{data.name}</span> : ""}
        </span>
        {open ? (
          <span className="text-lg">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        ) : (
          ""
        )}
      </div>
      {open ? (
        <>
          <motion.ul
            animate={
              subMenuOpen
                ? {
                    height: "fit-content",
                  }
                : {
                    height: 0,
                  }
            }
            className="flex h-0 flex-col pl-5 text-[0.6rem]  overflow-hidden "
          >
            {data.item?.map((menu) => (
              <Link
                href={`/pages/${menu.path}`}
                className="link !bg-transparent text-[0.9rem] "
                key={menu.path}
              >
                <div
                  className="menu-collapse-item text-transparent-8 ml-3"
                  role="presentation"
                >
                  <span className="flex items-center">
                    <span>{menu.menuname}</span>
                  </span>
                </div>
              </Link>
            ))}
          </motion.ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SubMenu;
