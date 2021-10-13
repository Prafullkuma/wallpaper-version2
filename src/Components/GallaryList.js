import React , { useState } from 'react'
import Modal from './Modal'

const GallaryList=({raw,regular})=>{
    const [open,setOpen]=useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    return(
        <div>
            <div className="gallery-img"  onClick={handleOpen}>
                <img src={raw} alt="flex-images"/>
            </div>
            <Modal open={open} handleClose={handleClose} regular={regular} />
        </div>
    )
}
export default GallaryList