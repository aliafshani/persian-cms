import React from 'react'
import { createPortal } from 'react-dom';
import "./DetailModal.css"

export default function DetailModal({detail,  submiter }) {
     return (
          <>
               {
                    createPortal(
                         <div className='model-parent active'>
                              <div className='detail-modal-body'>
                                   <h3 className='detail-modal-title'>
                                        {detail.title}
                                   </h3>
                                   <p className='detail-modal-price'>
                                      {detail.productDesc}
                                   </p>
                                   <p className=' detail-modal-popularity'>محبوبیت : {detail.popularity}</p>
                                   <button className='skip-modal-btn' onClick={() => submiter()}>باشه !</button>
                              </div>

                         </div>, document.getElementById("modals-parent")
                    )
               }
          </>
     )
}
