import React from "react";

const TopicBtn = ({ topic }) => {
  return (
    <div className="bg-gray-200  hover:bg-gray-400 hover:text-white rounded-full ">
      <p className="py-1 px-3">{topic}</p>
    </div>
  );
};

export default TopicBtn;
