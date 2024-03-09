import React from 'react'
import { createPortal } from 'react-dom';
import "./DetailModal.css"

export default function DetailModal({submiter}) {
     return (
          <>
               {
                    createPortal(
                         <div className='model-parent active'>
                              <div className='detail-modal-body'>
                                   <h3 className='detail-modal-title'>
                                        عنوان
                                   </h3>
                                   <p className='detail-modal-price'>                                   قیمت   : 20000$
                                   </p>
                                   <p className=' detail-modal-popularity'>محبوبیت : 4.6</p>
                                   <button className='skip-modal-btn' onClick={()=>submiter()}>باشه !</button>
                              </div>

                         </div>, document.getElementById("modals-parent")
                    )
               }
          </>
     )
}
