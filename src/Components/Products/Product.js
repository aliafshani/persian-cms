import React from 'react'
import NotFind from '../../404/NotFind'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductTable from '../ProductTable/ProductTable'
import DeleteModal from '../DeleteModal/DeleteModal'
import { useState } from 'react'

function Product() {
  
  const getAllProduct = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
  }

  const [allProducts, setAllProducts] = useState([])


  return (
    <div>
      <AddNewProduct getAllProduct={getAllProduct}/>
      <ProductTable getAllProduct={getAllProduct} allProducts={allProducts}/>
    </div>
  )
}

export default Product
