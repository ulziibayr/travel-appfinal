"use client";
import { Chart, Geom, Axis, Tooltip, Legend, Slider } from "bizcharts";
import { useState } from "react";
import CalendarSchedule from "../../partials/calendarSchedule";

function JobStatistics() {
  const [isOpen, setIsOpen] = useState(false);

  //   document.addEventListener("click", setIsOpen(false));

  const data = [
    {
      month: "Jan",
      city: "Хийгдэж байгаа",
      revenue: 7,
    },
    {
      month: "Jan",
      city: "Дууссан",
      revenue: 3.9,
    },
    {
      month: "Feb",

      city: "Хийгдэж байгаа",
      revenue: 6.9,
    },
    {
      month: "Feb",
      city: "Дууссан",
      revenue: 4.2,
    },
    {
      month: "Mar",
      city: "Хийгдэж байгаа",
      revenue: 9.5,
    },
    {
      month: "Mar",
      city: "Дууссан",
      revenue: 5.7,
    },
    {
      month: "Apr",
      city: "Хийгдэж байгаа",
      revenue: 14.5,
    },
    {
      month: "Apr",
      city: "Дууссан",
      revenue: 8.5,
    },
    {
      month: "May",
      city: "Хийгдэж байгаа",
      revenue: 18.4,
    },
    {
      month: "May",
      city: "Дууссан",
      revenue: 11.9,
    },
    {
      month: "Jun",
      city: "Хийгдэж байгаа",
      revenue: 21.5,
    },
    {
      month: "Jun",
      city: "Дууссан",
      revenue: 15.2,
    },
    {
      month: "Jul",
      city: "Хийгдэж байгаа",
      revenue: 25.2,
    },
    {
      month: "Jul",
      city: "Дууссан",
      revenue: 17,
    },
    {
      month: "Aug",
      city: "Хийгдэж байгаа",
      revenue: 26.5,
    },
    {
      month: "Aug",
      city: "Дууссан",
      revenue: 16.6,
    },
    {
      month: "Sep",
      city: "Хийгдэж байгаа",
      revenue: 23.3,
    },
    {
      month: "Sep",
      city: "Дууссан",
      revenue: 14.2,
    },
    {
      month: "Oct",
      city: "Хийгдэж байгаа",
      revenue: 18.3,
    },
    {
      month: "Oct",
      city: "Дууссан",
      revenue: 10.3,
    },
    {
      month: "Nov",
      city: "Хийгдэж байгаа",
      revenue: 13.9,
    },
    {
      month: "Nov",
      city: "Дууссан",
      revenue: 6.6,
    },
    {
      month: "Dec",
      city: "Хийгдэж байгаа",
      revenue: 9.6,
    },
    {
      month: "Dec",
      city: "Дууссан",
      revenue: 4.8,
    },
  ];
  const cols = {
    month: {
      range: [0.05, 0.95],
    },
    revenue: {
      min: 0,
    },
  };
  return (
    <main className="h-full">
      <div className="page-container relative h-full flex flex-auto flex-col">
        <div className="flex flex-col gap-3 h-full">
          <div>
            <p className="mb-1 text-lg font-bold">Удирдлагын самбар</p>
          </div>
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="flex flex-col gap-4 flex-auto">
              <div className="card card-border h-100" role="presentation">
                <div className="card-body">
                  <div className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                    <h5>Ажлын гүйцэтгэл</h5>
                    <div className="segment segment-item-active">
                      <div className="relative inline-block text-left">
                        <button
                          type="button"
                          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          2020
                        </button>
                        {isOpen && (
                          <div className="absolute z-10 rounded-md shadow-lg bg-white ">
                            <div
                              className="py-1"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                2021
                              </a>
                              <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                2022
                              </a>
                              <a
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                2023
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <Chart height={400} data={data} scale={cols} autoFit>
                    <Legend position="top-left" />
                    <Axis name="month" />
                    <Axis
                      name="revenue"
                      label={{
                        formatter: (val) => `${val}`,
                      }}
                    />
                    <Tooltip
                      crosshairs={{
                        type: "y",
                      }}
                    />
                    <Geom
                      type="interval"
                      position="month*revenue"
                      adjust={[
                        {
                          type: "dodge",
                          marginRatio: 10,
                        },
                      ]}
                      color={"city"}
                    />
                    <Slider />
                  </Chart>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="card card-border" role="presentation">
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-6">
                      <h5>Ажлын жагсаалт</h5>
                      <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                        Бүгд харах
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="table-default table-hover">
                        <thead>
                          <tr>
                            <th colSpan="1">Task ID</th>
                            <th colSpan="1">Subject</th>
                            <th colSpan="1">Priority</th>
                            <th colSpan="1">Assignees</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a
                                className="hover:underline font-semibold"
                                href="/app/project/scrum-board"
                              >
                                KCM-1393
                              </a>
                            </td>
                            <td>Design sign up flow</td>
                            <td>
                              <div className="tag text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0">
                                High
                              </div>
                            </td>
                            <td>
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="hover:underline font-semibold"
                                href="/app/project/scrum-board"
                              >
                                KCM-2039
                              </a>
                            </td>
                            <td>Update contact page</td>
                            <td>
                              <div className="tag text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0">
                                Medium
                              </div>
                            </td>
                            <td>
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="hover:underline font-semibold"
                                href="/app/project/scrum-board"
                              >
                                KCM-2155
                              </a>
                            </td>
                            <td>Document features 2.0</td>
                            <td>
                              <div className="tag text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0">
                                Medium
                              </div>
                            </td>
                            <td>
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="hover:underline font-semibold"
                                href="/app/project/scrum-board"
                              >
                                KCM-2270
                              </a>
                            </td>
                            <td>Fix typo in home page</td>
                            <td>
                              <div className="tag bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0">
                                Low
                              </div>
                            </td>
                            <td>
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <a
                                className="hover:underline font-semibold"
                                href="/app/project/scrum-board"
                              >
                                KCM-1957
                              </a>
                            </td>
                            <td>Fix broken API</td>
                            <td>
                              <div className="tag text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0">
                                High
                              </div>
                            </td>
                            <td>
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="card card-border" role="presentation">
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-6">
                      <h5>Төсөл</h5>
                      <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">
                        Бүгд харах
                      </button>
                    </div>
                    <div className="mb-4">
                      <div className="card card-border" role="presentation">
                        <div className="card-body">
                          <div className="grid gap-x-4 grid-cols-12">
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="flex flex-col">
                                <h6 className="font-bold">
                                  <a href="/app/project/scrum-board">APU OTC</a>
                                </h6>
                                <span>ERP </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center md:justify-end">
                              <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="text-base"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                  ></path>
                                </svg>
                                <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                                  27 / 32
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-3 md:flex md:items-center">
                              <div className="progress line">
                                <div className="progress-wrapper">
                                  <div className="progress-inner">
                                    <div className="progress-bg h-1.5 bg-green-500"></div>
                                  </div>
                                </div>
                                <span className="progress-info line">80%</span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle bg-amber-500 dark:bg-amber-500 cursor-pointer">
                                    <span className="avatar-string ">CB</span>
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle bg-amber-500 dark:bg-amber-500 cursor-pointer">
                                    <span className="avatar-string ">CB</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-1 flex md:items-center justify-end">
                              <div className="dropdown">
                                <div
                                  className="dropdown-toggle"
                                  id="dropdown-toggle-131-HBsiyhaC64"
                                >
                                  <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-7 w-7 inline-flex items-center justify-center text-base">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 16 16"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="card card-border" role="presentation">
                        <div className="card-body">
                          <div className="grid gap-x-4 grid-cols-12">
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="flex flex-col">
                                <h6 className="font-bold">
                                  <a href="/app/project/scrum-board">GS25</a>
                                </h6>
                                <span>ERP</span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center md:justify-end">
                              <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="text-base"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                  ></path>
                                </svg>
                                <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                                  15 / 36
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-3 md:flex md:items-center">
                              <div className="progress line">
                                <div className="progress-wrapper">
                                  <div className="progress-inner">
                                    <div className="progress-bg h-1.5 bg-indigo-400"></div>
                                  </div>
                                </div>
                                <span className="progress-info line">45%</span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle bg-amber-500 dark:bg-amber-500 cursor-pointer">
                                    <span className="avatar-string ">GF</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-1 flex md:items-center justify-end">
                              <div className="dropdown">
                                <div
                                  className="dropdown-toggle"
                                  id="dropdown-toggle-134-WN6XDAjkWS"
                                >
                                  <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-7 w-7 inline-flex items-center justify-center text-base">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 16 16"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="card card-border" role="presentation">
                        <div className="card-body">
                          <div className="grid gap-x-4 grid-cols-12">
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="flex flex-col">
                                <h6 className="font-bold">
                                  <a href="/app/project/scrum-board">MASU</a>
                                </h6>
                                <span>Web Application</span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center md:justify-end">
                              <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="text-base"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                  ></path>
                                </svg>
                                <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                                  19 / 27
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-3 md:flex md:items-center">
                              <div className="progress line">
                                <div className="progress-wrapper">
                                  <div className="progress-inner">
                                    <div className="progress-bg h-1.5 bg-green-500"></div>
                                  </div>
                                </div>
                                <span className="progress-info line">73%</span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle bg-pink-500 dark:bg-pink-500 cursor-pointer">
                                    <span className="avatar-string ">DH</span>
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle bg-blue-600 dark:bg-blue-600 cursor-pointer">
                                    <span className="avatar-string ">SW</span>
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle cursor-pointer">
                                    <span className="avatar-string ">+2</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-1 flex md:items-center justify-end">
                              <div className="dropdown">
                                <div
                                  className="dropdown-toggle"
                                  id="dropdown-toggle-137-snHSb164fZ"
                                >
                                  <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-7 w-7 inline-flex items-center justify-center text-base">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 16 16"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="card card-border" role="presentation">
                        <div className="card-body">
                          <div className="grid gap-x-4 grid-cols-12">
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="flex flex-col">
                                <h6 className="font-bold">
                                  <a href="/app/project/scrum-board">
                                    Ultimate POS
                                  </a>
                                </h6>
                                <span>ERP</span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-2 md:col-span-2 lg:col-span-2 md:flex md:items-center md:justify-end">
                              <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="text-base"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                  ></path>
                                </svg>
                                <span className="ml-1 rtl:mr-1 whitespace-nowrap">
                                  23 / 78
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-2 lg:col-span-3 md:flex md:items-center">
                              <div className="progress line">
                                <div className="progress-wrapper">
                                  <div className="progress-inner">
                                    <div className="progress-bg h-1.5 bg-red-500"></div>
                                  </div>
                                </div>
                                <span className="progress-info line">21%</span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 md:col-span-3 lg:col-span-3 md:flex md:items-center">
                              <div className="avatar-group avatar-group-chained">
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle  cursor-pointer">
                                    {/* <Image
                                      className="avatar-Image avatar-circle"
                                      loading="lazy"
                                    /> */}
                                  </span>
                                </span>
                                <span className="tooltip-wrapper">
                                  <span className="avatar avatar-circle cursor-pointer">
                                    <span className="avatar-string ">+1</span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="my-1 sm:my-0 col-span-12 sm:col-span-1 flex md:items-center justify-end">
                              <div className="dropdown">
                                <div
                                  className="dropdown-toggle"
                                  id="dropdown-toggle-140-dJn83KeOSK"
                                >
                                  <button className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-circle h-7 w-7 inline-flex items-center justify-center text-base">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 16 16"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CalendarSchedule />
          </div>
        </div>
      </div>
    </main>
  );
}

export default JobStatistics;
