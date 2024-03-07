import React from 'react'
import NotFind from '../../404/NotFind'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductTable from '../ProductTable/ProductTable'
import DeleteModal from '../DeleteModal/DeleteModal'

function Product() {
  return (
    <div>
      <AddNewProduct />
      <ProductTable />
      <NotFind errorTitle="کاربری" />
      <DeleteModal />
    </div>
  )
}

export default Product
