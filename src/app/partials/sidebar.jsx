"use client";
import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import SubMenu from "../components/submenu/subMenu";
import Image from "next/image";
import logo from "../images/logo.png";
import hidelogo from "../images/ultimatelogo.png";

import UserContext from "../context/userContext";
import Link from "next/link";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });

  const { open, setOpen } = useContext(UserContext);
  const sidebarRef = useRef();
  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "19rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "19rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList = [
    {
      name: "Удирдлагын самбар",
      icon: RiBuilding3Line,
      item: [
        {
          menuname: "Борлуулалт",
          path: "EmployeeCreate",
        }
      ],
    },

    {
      name: "Мастер дата",
      icon: RiBuilding3Line,
      item: [
        {
          menuname: "Ажилтан бүртгэл",
          path: "EmployeeCreate",
        },
        {
          menuname: "Категори бүртгэл",
          path: "CategoryCreate",
        },
        {
          menuname: "Бараа бүртгэл",
          path: "ProductCreate",
        }
      ],
    },

    {
      name: "Тайлан, Лавлагаа",
      icon: TbReportAnalytics,
      item: [
        {
          menuname: "Захиалгын лавлагаа",
          path: "Salaries",
        },
        {
          menuname: "Борлуулалтын лавлагаа",
          path: "SalariesTable",
        }
      ],
    },
    {
      name: "Тохиргоо",
      icon: RiBuilding3Line,
      item: [
        {
          menuname: "Цагийн мэдээ",
          path: "Employee4",
        }
      ],
    },
    {
      name: "Тусламж",
      icon: TbReportAnalytics,
      menus: ["Гэрээний лавлагаа", "Бүх ажилтан"],
      item: [
        {
          menuname: "Ашиглах заавар",
          path: "Employee11",
        }
      ],
    },
  ];

  return (
    <div
      className={`lg:max-w-[19rem] ${
        open ? "lg:w-[19rem]" : "lg:w-16"
      } md:w-16 transition-all duration-300`}
    >
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="z-[999] overflow-hidden fixed h-screen bg-sidebar b-r-1 b-shadow"
      >
        <div
          className={`flex items-center ${
            open ? " " : "justify-center"
          }  h-16 mb-px border-bottom-transparent`}
        >
          <Link href="/">
            {open ? (
              <Image
                src={logo}
                height={50}
                alt="logo"
                priority={40}
                className="px-5"
              />
            ) : (
              <Image
                src={hidelogo}
                height={50}
                alt="logo"
                priority={40}
                className=" p-1"
              />
            )}
          </Link>
        </div>

        <div className="flex flex-col h-full side-line-hr">
          <div className="whitespace-pre px-2 text-[0.9rem]  flex flex-col  font-sans overflow-x-hidden md:h-[86%] h-[100%]">
            <div className="mb-2">
              <div className="text-transparent-5 gap-4 font-bold">
                <div className="menu-title menu-title-transparent text-xs">
                  {open ? "Apps" : ""}
                </div>
              </div>
              {subMenusList?.map((menu) => (
                <div
                  key={menu.name}
                  className="flex flex-col gap-4 text-gray-700"
                >
                  <SubMenu data={menu} open={open} />
                </div>
              ))}
            </div>
          </div>
          {open && (
            <div className="flex-1 text-sm z-0 max-h-40 my-auto whitespace-pre w-full font-sans">
              <div className="flex px-5 py-4 items-center justify-between border-top-transparent">
                <div className="text-transparent-8">
                  <p>Version</p>
                  <p>1.1.1.1</p>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      {/* <div class="absolute lg:hidden md:hidden">
        <div class="relative z-[999] ml-4 flex items-center justify-between h-16 -mb-px">
          <MdMenu size={20} color={open ? "black" : "white"} />
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
