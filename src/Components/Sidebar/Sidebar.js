import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoColorPaletteOutline } from "react-icons/io5";
import data from '../../Context/Context';
import ThemModal from '../themModal/ThemModal';





function Sidebar() {
     const dataColor = useContext(data)

     const test = () => {
          dataColor.setShowThem(prev =>!prev)
     }
     return (
          <>


               <div className={`${dataColor.color} sidebar `}>
                    <h1 className='sidebar-title'>
                         به داشبورد خود خوش آمدید
                    </h1>
                    <hr />

                    <ul className='sidebar-links'>
                         <li className='sidebar-link-li active'>
                              <p><IoHomeOutline /></p>
                              <Link to="/products">صفحه اصلی</Link>
                         </li>
                         <li className='sidebar-link-li '>
                              <p><MdOutlineProductionQuantityLimits /></p>
                              <Link to="/products">محصولات</Link>
                         </li>
                         <li className='sidebar-link-li'>
                              <p><BiCommentDetail /></p>
                              <Link to={"comments"}>کامنت ها</Link>
                         </li>
                         <li
                              className='sidebar-link-li'>
                              <p><FaRegUserCircle /></p>
                              <Link to={"users"}>کاربران</Link>
                         </li>
                         <li className='sidebar-link-li'>
                              <p><BsBagCheck /></p>
                              <Link to={"orders"}>سفارشات</Link>
                         </li>
                         <li className='sidebar-link-li'>
                              <p><BsCurrencyDollar /></p>
                              <Link to={"offers"}>تخفیف ها</Link>
                         </li>
                         <li
                              onClick={() => test()}
                              className='sidebar-link-li'>
                              <p><IoColorPaletteOutline /></p>
                              <Link to={"offers"}>تغییر تم</Link>
                         </li>
                    </ul>
               </div>

          </>
     )
}

export default Sidebar;
