import React, { useContext } from 'react'
import { createPortal } from 'react-dom';
import "./../DetailModal/DetailModal.css"
import data from '../../Context/Context';



export default function ThemModal() {
     const them = useContext(data)

     const changeStatus = () => {
          them.setShowThem(prev => !prev)
     }
     const changeThem = (event) => {
          them.setColor(event.target.value)
          them.setShowThem(false)
     }
     return (
          <>
               {
                    createPortal(
                         <div className='model-parent active'>
                              <div className='detail-modal-body'>
                                   <h3 className='detail-modal-title'>
                                        تم سایت  را تغییر بدهید
                                   </h3>
                                   <p className='detail-modal-price'>
                                        {them.colors.map((item) => (
                                             <button
                                                  onClick={(event) => changeThem(event)}
                                                  value={item}
                                                  className={`orgBtn ${item}`}></button>
                                        ))}
                                   </p>
                                   <p className=' detail-modal-popularity'></p>
                                   <button className='skip-modal-btn' onClick={() => changeStatus()}>منصرف شدم!</button>
                              </div>

                         </div>, document.getElementById("modals-parent")
                    )
               }
          </>
     )
}
