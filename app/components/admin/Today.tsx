"use client";

import moment from "moment";
import React from "react";

export const Today = () => {
  const today = new Date();
  return (
    <div className="flex flex-row gap-1">
      <span className="text-base font-semibold text-lime-600">
        {moment(today).format("dddd")}
      </span>
      {","}
      <span className="text-base font-semibold text-gray-400 capitalize">
        {moment(today).format("MMMM Do YYYY")}
      </span>
    </div>
  );
};
