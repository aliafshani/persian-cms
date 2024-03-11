import React, { Children, useState } from 'react'
import "./ProductTable.css"
import { MdOutlineEdit } from "react-icons/md";
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailModal from '../DetailModal/DetailModal'
import EditModal from '../EditModal/EditModal'

export default function ProductTable() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isDetailModalShow, setIsDetailModalShow] = useState(false)
  const [isEditModal, setIsEditModal] = useState(false)

  const submitDeleteModal = () => {
    setIsShowModal(false)
  }
  const cancelDeleteModal = () => {
    setIsShowModal(false)
  }
  const skipDetailModal = () => {
    setIsDetailModalShow(false)
  }
  const updateProductInfos = (event) => {
    event.preventDefault();
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
            <button className='product-table-btn' onClick={() => setIsDetailModalShow(true)}>جزییات بیشتر</button>
            <button className='product-table-btn' onClick={() => setIsShowModal(true)}>حذف</button>
            <button className='product-table-btn' onClick={() => setIsEditModal(true)}>ویرایش</button>

          </td>
        </tr>
      </table>
      {
        isShowModal
          ? <DeleteModal
            submiter={submitDeleteModal}
            cancel={cancelDeleteModal} />
          : null
      }
      {
        isDetailModalShow
          ? <DetailModal
            submiter={skipDetailModal} />
          : null
      }

      {
        isEditModal
          ? <EditModal
            onClose={() => setIsEditModal(false)}
            onSubmit={updateProductInfos}>
            <div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit/>
                </span>
                <input 
                className='data-input'
                placeholder='عنوان جدید را وارد کنید.' />
                
              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit/>
                </span>
                <input 
                className='data-input'
                placeholder='عنوان جدید را وارد کنید.' />
                
              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit/>
                </span>
                <input 
                className='data-input'
                placeholder='عنوان جدید را وارد کنید.' />
                
              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit/>
                </span>
                <input 
                className='data-input'
                placeholder='عنوان جدید را وارد کنید.' />
                
              </div>
            </div>


          </EditModal>
          : null
      }
    </>

  )
}
