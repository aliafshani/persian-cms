import React from 'react';
import { createPortal } from 'react-dom';
import "./DeleteModdal.css"

export default function DeleteModal({ submiter, cancel }) {
     return (
          <>
               {createPortal(
                    <div className='model-parent active'>
                         <div className='delete-modal'>
                              <h1>آیا از حدف اطمینان ذاریذ؟</h1>
                              <div className='delete-modal-btns'>
                                   <button className='delete-btn accept-btn' onClick={()=>submiter()}>بله</button>
                                   <button className='delete-btn reject-btn' onClick={()=>cancel()}>خیر</button>
                              </div>
                         </div>
                    </div >, document.getElementById("modals-parent")
               )
               }
          </>
     )
}
