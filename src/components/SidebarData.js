import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
// import * as AiIcons from "react-icons/ai";


 export const SidebarData = [
  {title:'Logo',
    path: '/',
    icon:<BsIcons.BsFillLightningChargeFill />,
    cName:'sidebar-text'
 },
 
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'sidebar-text'
    },
    {
      title: 'View Schedule',
      path: '/schedule',
      icon: <FaIcons.FaCalendar />,
      cName: 'sidebar-text'
    },
    {
      title: 'Notes',
      path: '/notes',
      icon: <AiIcons.AiFillFile />,
      cName: 'sidebar-text'
    }
   
]