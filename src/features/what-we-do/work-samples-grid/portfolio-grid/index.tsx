import React from 'react';
import { StaticImageData } from 'next/image';
import PortfolioCard from './portfolio-card.tsx';

export type Portfolio = {
  title: string;
  subTitle: string;
  outerFilter: string;
  innerFilter: string;
  imgBefore: string;
  imgAfter: string;
}

type PropTypes = {
  portofolioData: Portfolio[];
  gridView: boolean;
}

const PortfoilioGrid = ({ portofolioData, gridView }: PropTypes) => {
  return (
    <div className={`grid divide-x divide-y7 dark:divide-slate-700 divide-gray-300 ${gridView ? 'grid-cols-2' : 'grid-cols-1'}`}>
      {portofolioData.map((portfolio, index) => {
        return <PortfolioCard key={index} portfolio={portfolio}/>
      })}
    </div>
  )
}

export default PortfoilioGrid
