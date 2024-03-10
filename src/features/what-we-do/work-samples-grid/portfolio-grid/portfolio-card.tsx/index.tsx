import React from 'react'
import { Portfolio } from '..'
import Image from 'next/image';
import AnimatedBox from './AnimatedBox';


const PortfolioCard = ({ portfolio }: { portfolio: Portfolio }) => {

  const { title, subTitle, imgBefore, imgAfter } = portfolio;

  return (
    <div className='flex flex-col px-8 py-5 border-b dark:border-slate-700 border-gray-300'>
      <div className='flex justify-between items-start h-[7rem] py-5'>
        <div className='text-5xl font-semi-bold'>{title}</div>
        <div className='text-xl w-[15ch]'>{subTitle}</div>
      </div>
      <div className='h-[30rem] overflow-hidden flex justify-center items-center'>
        {/* <Image
          className="w-full"
          priority={false}
          src={imgAfter}
          alt={"achievement-img"} /> */}
          <AnimatedBox imageBefore={imgBefore} imageAfter={imgAfter}/>
      </div>
    </div>
  )
}

export default PortfolioCard
