import React from 'react'

const GallaryList=({raw,regular})=>{
   

    return(
        <div className="gallery-img">
            <img src={raw} alt="flex-images"/>
        </div>
    )
}
export default GallaryList