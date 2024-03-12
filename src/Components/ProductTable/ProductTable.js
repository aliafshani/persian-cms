import React, { Children, useEffect, useState } from 'react'
import "./ProductTable.css"
import { MdOutlineEdit } from "react-icons/md";
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailModal from '../DetailModal/DetailModal'
import EditModal from '../EditModal/EditModal'
import NotFind from '../../404/NotFind';

export default function ProductTable() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isDetailModalShow, setIsDetailModalShow] = useState(false)
  const [isEditModal, setIsEditModal] = useState(false)
  const [allProducts, setAllProducts] = useState([])
  const [productDetail, setProductDetail] = useState([])
  const [productId, setProductId] = useState(0)

  const getAllProduct = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
  }

  useEffect(() => {
    getAllProduct()
  }, [])


  function submitDeleteModal() {
    console.log(productId);
    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "Delete"
    }).then(res => res.json())
      .then(result => {
        getAllProduct()
        setIsShowModal(false)

      })

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
      {
        allProducts.length === 0
          ? <NotFind errorTitle="کاربری" />
          : (
            <table className='product-table'>
              <tr className='product-table-heading-tr'>
                <th>photo</th>
                <th>name</th>
                <th>price</th>
                <th>mojodi</th>
              </tr>
              {
                allProducts.map(item => (
                  <tr className='product-table-tr'>
                    <td>
                      <img className='product-table-img' src={item.img} alt='image product' />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price} $</td>
                    <td>{item.count}</td>
                    <td>
                      <button className='product-table-btn' onClick={() => {
                        setProductDetail(item)
                        setIsDetailModalShow(true)
                      }
                      }>جزییات بیشتر</button>

                      <button className='product-table-btn' onClick={() => {
                        setIsShowModal(true)
                        setProductId(item.id)
                        console.log(item.id);
                      }}>حذف</button>

                      <button className='product-table-btn' onClick={() => setIsEditModal(true)}>ویرایش</button>

                    </td>
                  </tr>
                ))
              }

            </table>
          )
      }
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
            detail={productDetail}
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
                  <MdOutlineEdit />
                </span>
                <input
                  className='data-input'
                  placeholder='عنوان جدید را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
                </span>
                <input
                  className='data-input'
                  placeholder='عنوان جدید را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
                </span>
                <input
                  className='data-input'
                  placeholder='عنوان جدید را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
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
