import React from 'react'
import GallaryList from './GallaryList'

const GallaryContainer=({data})=>{

  return(
      <div className="gallery">
          {data.map((ele)=>{
              return <GallaryList key={ele.id} {...ele}/>
          })}
      </div>
  )
}
export default GallaryContainer