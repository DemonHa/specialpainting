import React from 'react'
import Image from 'next/image'
import photo from "../../../../../public/photo.png"

const images = [photo, photo, photo, photo, photo, photo]

const Achivements = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4'>
      {images.map((image) => {
        return <div className='flex py-10 border border-slate-700 justify-center'><Image width={100} height={100} src={image} alt={"achievement-img"} /></div>
      })}
    </div>)
}

export default Achivements