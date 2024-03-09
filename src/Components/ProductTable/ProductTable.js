import React, { useState } from 'react'
import "./ProductTable.css"
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailModal from '../DetailModal/DetailModal'

export default function ProductTable() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isDetailModalShow, setIsDetailModalShow] = useState(false)

  const submitDeleteModal = () => {
    setIsShowModal(false)
  }
  const cancelDeleteModal = () => {
    setIsShowModal(false)
  }
  const skipDetailModal = ()=>{
    setIsDetailModalShow(false)
  }

  return (
    <>
      <table className='product-table'>
        <tr className='product-table-heading-tr'>
          <th>photo</th>
          <th>name</th>
          <th>price</th>
          <th>mojodi</th>
        </tr>
        <tr className='product-table-tr'>
          <td>
            <img className='product-table-img' src='./Images/iphone15.webp' alt='image product' />
          </td>
          <td>iphone15</td>
          <td>12000 $</td>
          <td>26</td>
          <td>
            <button className='product-table-btn' onClick={() => setIsDetailModalShow(true)}>deatail</button>
            <button className='product-table-btn' onClick={() => setIsShowModal(true)}>delete</button>
            <button className='product-table-btn'>edit</button>

          </td>
        </tr>
      </table>
      {
        isShowModal ?
          <DeleteModal
            submiter={submitDeleteModal}
            cancel={cancelDeleteModal} /> :
          null
      }
      {
        isDetailModalShow
          ? <DetailModal 
            submiter={skipDetailModal}
            
            />
          : null
      }
    </>

  )
}
