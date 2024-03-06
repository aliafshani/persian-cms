import React from 'react'
import NotFind from '../../404/NotFind'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductTable from '../ProductTable/ProductTable'

function Product() {
  return (
    <div>
      <AddNewProduct />
      <ProductTable />
      <NotFind errorTitle="کاربری" />

    </div>
  )
}

export default Product
