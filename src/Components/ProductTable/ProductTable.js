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

  const [newname, setNewName] = useState("")
  const [newPrice, setNewPrice] = useState("")
  const [newCount, setNewCount] = useState("")
  const [newImg, setNewImg] = useState("")
  const [newPopularity, setNewPopularity] = useState("")
  const [newSale, setNewSale] = useState("")
  const [newColors, setNewColors] = useState("")



  const getAllProduct = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
  }

  useEffect(() => {
    getAllProduct()
  }, [])

  function submitDeleteModal() {
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

    const newDataProduct = {
      title: newname,
      price: newPrice,
      count: newCount,


      img: newImg,

      
      popularity: newPopularity,
      sale: newSale,
      colors: newColors
    }
    fetch(`http://localhost:8000/api/products/${productId}`,
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDataProduct)
      }).then(res => res.json())
      .then(data => {
        console.log(data);
        getAllProduct()
      })
    event.preventDefault();
    setIsEditModal(false)
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

                      <button className='product-table-btn' onClick={() => {
                        setIsEditModal(true)
                        setProductId(item.id)
                        setNewName(item.title)
                        setNewPrice(item.price)
                        setNewColors(item.colors)
                        setNewCount(item.count)
                        setNewImg(item.img)
                        setNewPopularity(item.popularity)
                        setNewSale(item.sale)

                      }}>ویرایش</button>

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
                  onChange={(event) => setNewName(event.target.value)}
                  value={newname}
                  className='data-input'
                  placeholder='عنوان جدید را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
                </span>
                <input
                  onChange={(event) => setNewPrice(event.target.value)}
                  value={newPrice}
                  className='data-input'
                  placeholder='مبلغ محصول را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
                </span>
                <input
                  onChange={(event) => setNewCount(event.target.value)}
                  value={newCount}
                  className='data-input'
                  placeholder='موجودی محصول را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
                </span>
                <input
                  onChange={(event) => setNewImg(event.target.value)}
                  value={newImg}
                  className='data-input'
                  placeholder='آدرس کاور محصول را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>

                  <MdOutlineEdit />
                </span>
                <input
                  onChange={(event) => setNewPopularity(event.target.value)}
                  value={newPopularity}
                  className='data-input'
                  placeholder='میزان محبوبیت محصول را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
                </span>
                <input
                  onChange={(event) => setNewSale(event.target.value)}
                  value={newSale}
                  className='data-input'
                  placeholder='میزان فروش را وارد کنید.' />

              </div>
              <div className='input-box'>
                <span>
                  <MdOutlineEdit />
                </span>
                <input
                  onChange={(event) => setNewColors(event.target.value)}
                  value={newColors}
                  className='data-input'
                  placeholder='تعداد رنگبندی را وارد کنید.' />

              </div>

            </div>


          </EditModal>
          : null
      }




    </>

  )
}
