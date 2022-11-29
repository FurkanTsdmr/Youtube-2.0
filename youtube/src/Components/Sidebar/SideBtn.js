import React from "react";

const SideBtn = ({ name, icon }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center hover:bg-gray-200 py-1 rounded-[0.5rem] duration-300 ease-out lg:gap-4">
      <div className="text-[21px] lg:text-[26px]">{icon}</div>
      <p className="text-[11px] lg:text-[12px]"> {name}</p>
    </div>
  );
};

export default SideBtn;
