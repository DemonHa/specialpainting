import React from 'react'
import Image from 'next/image'
import screenedApproved from "@/../../public/screened_approved.png"
import topRated  from "@/../../public/top_rated.png" 
import eliteService from "@/../../public/elite_service.png";

const images = [screenedApproved, topRated, eliteService, screenedApproved, screenedApproved, screenedApproved]

const Achivements = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4'>
      {images.map((image) => {
        return <div className='flex py-10 border border-slate-700 justify-center'><Image className='w-[120px] h-[120px]' priority={false} src={image} alt={"achievement-img"} /></div>
      })}
    </div>)
}

export default Achivements