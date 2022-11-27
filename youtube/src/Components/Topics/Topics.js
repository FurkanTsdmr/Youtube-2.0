import React from "react";
import TopicBtn from "./TopicBtn";

const Topics = () => {
  const topics = [
    "Trending",
    "Sports",
    "Cars",
    "Gaming",
    "Music",
    "Football",
    "Comedy",
    "Pranks",
    "Space",
    "Wizard",
    "Cartoons",
  ];
  return (
    <div className="flex items-center space-x-4 px-5 lg:px-10 pt-2">
      {topics.map((topic) => (
        <TopicBtn topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
