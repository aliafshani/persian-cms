import React from 'react'
import "./ProductTable.css"

export default function ProductTable() {
  return (
    <table className='product-table'>
      <tr className='product-table-heading-tr'>
          <td>photo</td>
          <td>name</td>          
          <td>price</td>
          <td>mojodi</td>
      </tr>
      <tr>
          <td>
               <img className='product-table-img' src='./Images/iphone15.webp' alt='image product'/>
          </td>
          <td>iphone15</td>
          <td>12000 $</td>
          <td>26</td>
          <td>
               <button className='product-table-btn'>deatail</button>               
               <button className='product-table-btn'>delete</button>
               <button className='product-table-btn'>edit</button>

          </td>
      </tr>
    </table>
  )
}
