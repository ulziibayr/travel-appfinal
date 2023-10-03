"use client";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "../../utils/calendar";
import cn from "../../utils/cn";

function Calendar() {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className="mx-auto max-w-[420px]">
      <div className="picker-view">
        <div className="day-picker">
          <div className="picker-header flex items-center justify-between mb-2">
            <div>
              <button
                className="picker-header-label hover:text-indigo-400"
                tabIndex="0"
                type="button"
              >
                {months[today.month()]}
              </button>
              <button
                className="picker-header-label hover:text-indigo-400"
                tabIndex="0"
                type="button"
              >
                {today.year()}
              </button>
            </div>
            <div className="flex items-center rtl:flex-row-reverse">
              <button
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
                className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 w-9 inline-flex items-center justify-center text-lg"
                type="button"
              >
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
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
                className="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 w-9 inline-flex items-center justify-center text-lg"
                type="button"
              >
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
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <table className="picker-table " cellSpacing="0">
            <thead>
              <tr className="grid grid-cols-7">
                {days.map((day, index) => {
                  return (
                    <th key={index} className="week-day-cell">
                      <span className="week-day-cell-content">{day}</span>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="grid grid-cols-7">
              {generateDate(today.month(), today.year()).map(
                ({ date, currentMonth, today }, index) => {
                  return (
                    <tr
                      key={index}
                      className="date-picker-week-cell grid grid-cols-7"
                    >
                      <td className="date-picker-cell h-10 w-10">
                        <button
                          type="button"
                          tabIndex="-1"
                          className={`
                                          ${cn(
                                            currentMonth
                                              ? "date-picker-cell-content date-picker-cell-current-month date-picker-cell-hoverable rounded-lg text-base"
                                              : "date-picker-cell-content date-picker-other-month date-picker-cell-hoverable rounded-lg text-base",
                                            today
                                              ? "date-picker-cell-content border border-indigo-400 date-picker-cell-current-month date-picker-cell-hoverable rounded-lg text-base text-indigo-400 "
                                              : "",
                                            selectDate
                                              .toDate()
                                              .toDateString() ===
                                              date.toDate().toDateString()
                                              ? "h-10 w-10 rounded-full grid place-content-center transition-all cursor-pointer select-none"
                                              : ""
                                          )}`}
                        >
                          <span className="relative flex justify-center items-center w-full h-full">
                            {date.date()}
                            <span
                              className={` ${
                                today
                                  ? "badge-dot h-1 w-1 absolute -bottom-1"
                                  : ""
                              }`}
                            ></span>
                          </span>
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
