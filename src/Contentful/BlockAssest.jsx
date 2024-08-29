import React, { useEffect, useState } from 'react'
import { getRichImage } from './getRichImage'

function BlockAssest({assetId}) {
    const [IMAGEURL,SETIMAGEURL]=useState([])
    const [ISLOADING,SetLOADING]=useState(true)

    useEffect(()=>{
        console.log("assetId",)
        const data=getRichImage(assetId).then((res)=>{
            return(
                SETIMAGEURL(res),
                ISLOADING(false)
            )
        })
    },[])
    if (ISLOADING) return <p>Loading...</p>
    if (!IMAGEURL) return <p>No Image Found</p>
  return (
    <div>
        <img src={IMAGEURL} width={500} height={500} style={{margin:"30px"}} alt="" srcSet="contentimages" />
      
    </div>
  )
}

export default BlockAssest
