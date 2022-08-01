import React from 'react';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as NoteIcon from "react-icons/fa";
import *as BsIcons from "react-icons/bs";

import { IconContext } from 'react-icons';


// import './sidebar.css';



function Sidebar() {
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <nav className='sidebar-menu fixed top-0 left-0 right-0 flex flex-col h-screen w-36 justify-between items-center py-5 bg-red-500 bg-sidebar text-green-600'>

        <Link className='text-white-100' to='#'>
            <BsIcons.BsFillLightningChargeFill />

        </Link>

        {/* sidebar items */}
        <ul className='sidebar-menu-items space-y-8 '>
            
        {SidebarData.map((item,index)=>{
            return(
                <li key={index} className={item.cName} >
                    <Link className='' to={item.path}>
                        {item.icon}
                        {/* <span>{item.title}</span> */}
                    </Link>
                </li>
            )
        })}

        </ul>
        
        {/* logout button */}
        
            <Link className='flex justify-start items-center p-1 ' to='#'>

                <AiIcons.AiOutlineLogout />
                <span className='pl-0.5 ' style={{color:'white'}}>Logout</span>
            </Link>
            

       
    </nav>
    </IconContext.Provider>
    </>

  )
}



export default Sidebar