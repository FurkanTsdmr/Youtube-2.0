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
    <div className="flex flex-wrap  items-center gap-4 px-5 lg:px-9 pt-2 lg:justify-center">
      {topics.map((topic) => (
        <TopicBtn topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
