import React from 'react'

export default function AddNewProduct() {
  return (
    <div className='product-main'>
          <h1 className='product-title'>افزودن محصول جدید</h1>      

          <form className='add-product-form'>
               <div className='add-product-form-wrap'>
                    <div className='add-product-form-group'>
                         <input type='text' placeholder='اسم محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <input type='text' placeholder='قیمت محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <input type='text' placeholder='موجودی محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <input type='text' placeholder='  آدرس عکس محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <input type='text' placeholder='میزان محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <input type='text' placeholder='میزان فروش محصول را بنویسید' className='add-product-input'/>
                    </div>
                    <div className='add-product-form-group'>
                         <input type='text' placeholder='اتعداد رنگ بندی محصول را بنویسید' className='add-product-input'/>
                    </div>
                    
               </div>
          </form>
    </div>
  )
}
