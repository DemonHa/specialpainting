import React from 'react'
import Image from 'next/image'
import screenedApproved from "@/../../public/screened_approved.png"
import topRated from "@/../../public/top_rated.png"
import eliteService from "@/../../public/elite_service.png";

const images = [screenedApproved, topRated, eliteService, screenedApproved, screenedApproved, screenedApproved]

const Achivements = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4'>
      {images.map((image, index) => {
        return <div key={index} className={`flex py-10  justify-center border-b border-slate-700 lg:border-r ${index % 2 === 0 || index === 0 ? 'max-lg:border-r' : ''}`}  >
          <Image className='w-[120px] h-[120px]' priority={false} src={image} alt={"achievement-img"} />
        </div>
      })}
      <div className='flex py-10  justify-center' />
    </div>)
}

export default Achivements;
