import React from 'react'
import Image from 'next/image';
import photo from '../../../../../public/screened.png'

const images = [photo, photo, photo, photo, photo, photo]

const Achivements = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3'>
            {images.map((image) => {
                return <div className='py-10 border-x border-y border-slate-700 flex items-center justify-center'>
                    <Image src={image} alt='achivement' width={120} height={120} />
                </div>
            })}
        </div>
    )
}

export default Achivements