import React from 'react'
import "./Sidebar.css"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";







function Sidebar() {
     return (
          <div className='sidebar'>
               <h1 className='sidebar-title'>
                    به داشبورد خود خوش آمدید
               </h1>
               <hr />

               <ul className='sidebar-links'>
                    <li className='sidebar-link-li active'>
                         <p><IoHomeOutline /></p>
                         <a href='#'>صفحه اصلی</a>
                    </li>
                    <li className='sidebar-link-li '>
                         <p><MdOutlineProductionQuantityLimits/></p>
                         <a href='#'>محصولات</a>
                    </li>
                    <li className='sidebar-link-li'>
                         <p><BiCommentDetail/></p>
                         <a href='#'>کامنت ها</a>
                    </li>
                    <li className='sidebar-link-li'>
                         <p><FaRegUserCircle/></p>
                         <a href='#'>کاربران</a>
                    </li>
                    <li className='sidebar-link-li'>
                         <p><BsBagCheck/></p>
                         <a href='#'>سفارشات</a>
                    </li>
                    <li className='sidebar-link-li'>
                         <p><BsCurrencyDollar/></p>
                         <a href='#'>تخفیف ها</a>
                    </li>
               </ul>
          </div>
     )
}

export default Sidebar;
