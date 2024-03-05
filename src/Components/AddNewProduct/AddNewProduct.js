import React from 'react'
import "./AddNewProduct.css"
import { PiCurrencyDollar } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { SlWallet } from "react-icons/sl";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";



export default function AddNewProduct() {
  return (
    <div className='product-main'>
          <h1 className='product-title'>افزودن محصول جدید</h1>      

          <form className='add-product-form'>
               <div className='add-product-form-wrap'>
                    <div className='add-product-form-group'>
                         <MdOutlineDriveFileRenameOutline/>
                         <input type='text' placeholder='اسم محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <PiCurrencyDollar/>
                         <input type='text' placeholder='قیمت محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <MdOutlineDiscount/>
                         <input type='text' placeholder='موجودی محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <CiImageOn/>
                         <input type='text' placeholder='  آدرس عکس محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <SlWallet/>
                         <input type='text' placeholder='میزان محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <SlWallet/>
                         <input type='text' placeholder='میزان فروش محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <IoColorPaletteOutline/>
                         <input type='text' placeholder='اتعداد رنگ بندی محصول را بنویسید' className='add-product-input'/>
                    </div>
                    
               </div>
               <button className='add-product-btn' >ثبت محصول </button>
          </form>
    </div>
  )
}
