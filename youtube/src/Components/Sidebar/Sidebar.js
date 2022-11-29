import React from "react";
import {MdHome} from 'react-icons/md'
import {GiChargedArrow} from 'react-icons/gi'
import { GiFiles} from 'react-icons/gi'
import {BiLibrary} from 'react-icons/bi'
import {RiHistoryFill} from 'react-icons/ri'
import SideBtn from "./SideBtn";

const Sidebar = () => {
  const sideItems = [
    {name:"Main", icon:<MdHome />},
    {name:"Mini", icon:<GiChargedArrow />},
    {name:"Channels", icon:<GiFiles />},
    {name:"Collection", icon:<BiLibrary />},
    {name:"Past", icon:<RiHistoryFill />}
]
  return( 
  <div className="hidden md:flex flex-col gap-10 pt-4 items-center px-1 ">
    {sideItems.map((item)=>(
    <SideBtn name={item.name} icon={item.icon} />
    ))}
  </div>
  
  )
};

export default Sidebar;
