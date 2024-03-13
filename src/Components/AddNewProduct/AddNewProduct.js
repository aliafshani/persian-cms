import React from 'react'
import "./AddNewProduct.css"
import { PiCurrencyDollar } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { SlWallet } from "react-icons/sl";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { useState } from 'react';



export default function AddNewProduct() {


     const [newname, setNewName] = useState("")
     const [newPrice, setNewPrice] = useState("")
     const [newCount, setNewCount] = useState("")
     const [newImg, setNewImg] = useState("")
     const [newPopularity, setNewPopularity] = useState("")
     const [newSale, setNewSale] = useState("")
     const [newColors, setNewColors] = useState("")

     const newProduct = {
          title: newname,
          price: newPrice,
          count: newCount,
          img: newImg,
          popularity: newPopularity,
          sale: newSale,
          colors: newColors
     }

     const addNewProduct = (event) => {

          event.preventDefault()
  
          fetch(`http://localhost:8000/api/products`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newProduct)
          }).then(res => res.json())
          .then(result => {
              console.log(result);
          })
      }


     return (
          <div className='product-main'>
               <h1 className='product-title'>افزودن محصول جدید</h1>

               <form className='add-product-form'>
                    <div className='add-product-form-wrap'>
                         <div className='add-product-form-group'>
                              <MdOutlineDriveFileRenameOutline />
                              <input
                                   type='text'
                                   placeholder='اسم محصول را بنویسید'
                                   className='add-product-input'
                                   value={newname}
                                   onChange={(e) => setNewName(e.target.value)}
                              />
                         </div>
                         <div className='add-product-form-group'>
                              <PiCurrencyDollar />
                              <input
                                   type='text'
                                   placeholder='قیمت محصول را بنویسید'
                                   className='add-product-input'
                                   value={newPrice}
                                   onChange={(e) => setNewPrice(e.target.value)}
                              />
                         </div>
                         <div className='add-product-form-group'>
                              <MdOutlineDiscount />
                              <input type='text'
                                   placeholder='موجودی محصول را بنویسید'
                                   className='add-product-input'
                                   value={newCount}
                                   onChange={(e) => setNewCount(e.target.value)}
                              />
                         </div>
                         <div className='add-product-form-group'>
                              <CiImageOn />
                              <input
                                   type='text'
                                   placeholder='  آدرس عکس محصول را بنویسید'
                                   className='add-product-input'
                                   value={newImg}
                                   onChange={(e) => setNewImg(e.target.value)}
                              />
                         </div>
                         <div className='add-product-form-group'>
                              <SlWallet />
                              <input
                                   type='text'
                                   placeholder='میزان محصول را بنویسید'
                                   className='add-product-input'
                                   value={newPopularity}
                                   onChange={(e) => setNewPopularity(e.target.value)}
                              />
                         </div>
                         <div className='add-product-form-group'>
                              <SlWallet />
                              <input
                                   type='text'
                                   placeholder='میزان فروش محصول را بنویسید'
                                   className='add-product-input'
                                   value={newSale}
                                   onChange={(e) => setNewSale(e.target.value)}
                              />
                         </div>
                         <div className='add-product-form-group'>
                              <IoColorPaletteOutline />
                              <input
                                   type='text'
                                   placeholder='اتعداد رنگ بندی محصول را بنویسید'
                                   className='add-product-input'
                                   value={newColors}
                                   onChange={(e) => setNewColors(e.target.value)}
                              />
                         </div>

                    </div>
                    <button
                         type='submit'
                         onClick={addNewProduct()}
                         className='add-product-btn' >ثبت محصول </button>
               </form>
          </div>
     )
}
