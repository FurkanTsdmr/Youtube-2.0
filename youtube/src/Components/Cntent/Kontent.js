import React from "react";
import avatar from '../../Img/avatar.jpg'
import iphone from '../../Img/iphone13.jpg'
import ContentCard from "../ContentCard";

const Content = () => {
  const videos = [
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
    {photo: iphone, title:"New Iphone 13 live from the new apple store now !! ",profile:avatar},
  ]
  return <div className=" lg:px-10 pt-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 gap-4">
    {videos.map((video)=> <ContentCard 
    photo={video.photo} 
    title={video.title} 
    profile={video.profile}
     /> )}
  </div>;
};

export default Content;
