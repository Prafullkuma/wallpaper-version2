import React from 'react'
import './Modal.css'

const Modal=({open,handleClose,regular})=>{

    if(!open){
        return null
    }
    
    return(
        <div>
             <div className="modal" onClick={handleClose}>
             <div className="modal-content" onClick={(e) => e.stopPropagation()} >
                <div className="modal-close">
                    <button onClick={handleClose}> Close</button>
                </div>

                 <div className="modal-body">
                    <img src={regular} alt="fullView" />
                 </div>
              </div>
           </div>
        </div>
    )
}
export default Modal