import React from 'react'
import "./EditModal.css"
import { createPortal } from 'react-dom'

export default function EditModal({ onClose, onSubmit, children }) {
     return (
          <>
               {
                    createPortal(
                         <div className='model-parent active'>
                              <form className='Edit-modal-body'>
                                   <h3 className='Edit-modal-title'>ویرایش اطلاعات</h3>
                                   <div className='Edit-modal-child'>
                                        {children}
                                   </div>
                                   <button
                                        type='submit'
                                        onClick={(event) => onSubmit(event)}
                                        className='Edit-modal-btn submit'>تایید</button>
                                   <button
                                        onClick={() => onClose()}
                                        className='Edit-modal-btn close'>بسته شود !</button>

                              </form>
                         </div>
                         , document.getElementById("modals-parent")
                    )

               }

          </>
     )
}
