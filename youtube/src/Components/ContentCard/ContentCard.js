import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const ContentCard = ({ photo, title, profile }) => {
  return (
    // Thumbnail
    <div>
      <div className="pl-4 w-full xs:overflow-y-visible ">
        <img
          src={photo}
          alt="Channel Photo"
          className="object-cover  w-80 h-40 rounded-[0.75rem] hover:scale-110 overflow-hidden ease-out"
        />
      </div>
      {/* Description */}
      <div className="flex items-center pl-4 ">
        <div className="w-10 h-10 ">
          <img
            src={profile}
            alt="Profile Image"
            className="w-10 h-10 pt-1 rounded-full shrink-0  "
          />
        </div>
        <div className=" overflow-hidden flex items-center">
          <strong className="font-semibold text-[14px] pl-2 ">{title}</strong>
        </div>
      </div>
      {/* Info */}
      <div className="pl-12">
        <p className="text-[12.5px] text-gray-500 pt-[2px]">Apple Channel</p>
        <div className="flex ">
          <p className="text-[12.5px] text-gray-500 pt-[1.5px]">
            357,300 views &#x2022; Streamed 1 hour ago
          </p>
          <BsCheckCircleFill className="ml-[10px] text-black-700" />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
