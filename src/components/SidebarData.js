import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from "react-icons/gr";


 export const SidebarData = [
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
      icon: <GrIcons.GrNotes />,
      cName: 'sidebar-text'
    }
   
]