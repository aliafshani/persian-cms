import React from 'react'
import "./Header.css"
import { FaRegBell } from "react-icons/fa6";
import { MdBrightnessMedium } from "react-icons/md";

function Header() {
     return (
          <div className='header'>
               <div className='right-header-section'>
                    <img className='right-header-section-profile-image' src="./img/ali-afhsni.jpg" alt='admin-profile' />
                    <div>
                         <p className='right-header-name'>علیرضا افشانی</p>
                         <p className='right-header-sub'>   برنامه نویس فرانت اند</p>
                    </div>
               </div>


               <div className='left-header-section'>
                    <div className='search-box'>
                         <input className='search-box-input' type='text' placeholder='جستجو کنید...' />
                         <button className='text-white search-box-btn'>جستوجو</button>
                    </div>
                    <button className='header-left-buttons'>
                         <FaRegBell />
                    </button>
                    <button className='header-left-buttons'>
                         <MdBrightnessMedium />
                    </button>
               </div>
          </div>
     )
}

export default Header
