import React from 'react';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';

import './sidebar.css';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as NoteIcon from "react-icons/fa";

import { IconContext } from 'react-icons';


function Sidebar() {
  return (
    <>
    <nav className='sidebar-menu'>
        <ul className='sidebar-menu-items'>
            <li><span>Logo</span></li>
        {SidebarData.map((item,index)=>{
            return(
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        {/* <span>{item.title}</span> */}
                    </Link>
                </li>
            )
        })}

        </ul>
    </nav>
    
    </>

  )
}



export default Sidebar