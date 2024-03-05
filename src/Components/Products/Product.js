import React from 'react'
import NotFind from '../../404/NotFind'
import AddNewProduct from '../AddNewProduct/AddNewProduct'

function Product() {
  return (
    <div>
      <NotFind errorTitle="کاربری"/>
      <AddNewProduct/>
    </div>
  )
}

export default Product
