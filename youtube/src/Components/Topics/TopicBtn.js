import React from "react";

const TopicBtn = ({ topic }) => {
  return (
    <div className="bg-gray-200   rounded-full ">
      <p className="py-1 px-3">{topic}</p>
    </div>
  );
};

export default TopicBtn;
