import React from 'react'
import { MdArrowOutward } from 'react-icons/md'


const prefilledStyles = {
    WebkitTextFillColor: 'rgba(255,255,255,0.6)',
    transition: 'background-color 5000s ease-in-out 0s',
}


const Contact = () => {

    return (
        <div className='flex divide-x divide-slate-700'>
            <div className='flex-col flex-1 flex justify-end  h-[40rem]'>
                <div className='ml-8 text-5xl font-semibold mb-12 max-md:ml-5 max-md:mb-10'>Contact us</div>
                <div>
                    <div className='grid grid-cols-2 max-md:grid-cols-1'>
                        <input style={prefilledStyles} className='bg-inherit border border-slate-700 h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14 text-white' placeholder='Full name' />
                        <input style={prefilledStyles} className='bg-inherit border border-slate-700 h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14 text-white' placeholder='Email' />
                        <input style={prefilledStyles} className='bg-inherit border border-slate-700 h-16 focus:outline-none min-md:px-8 px-5 max-md:h-14 text-white' placeholder='Phone (optional)' />
                    </div>
                    <div className='flex flex-col justify-end'>
                        <textarea style={prefilledStyles} className='w-full bg-inherit border border-slate-700 h-48 resize-none focus:outline-none py-5 px-5 min-md:px-8 max-lg:h-20' placeholder='How can we help you?' />
                        <div className='flex justify-between w-full items-center py-4 lg:py-0'>
                            <div className='min-md:ml-8 text-lg font-semibold ml-5'>Fill the fields above and click send, we will respond as soon as possible via emial or phone call.</div>
                            <div className='h-[4rem] w-[10rem] bg-indigo-600 hidden lg:flex' />
                        </div>
                    </div>
                </div>
                <button className='h-[5rem] w-full flex justify-between items-center px-5 min-md:px-7 bg-indigo-600 hover:bg-indigo-400  lg:hidden'><div className='text-xl font-bold max-md:text-sm'>Send</div> <MdArrowOutward size={34} /></button>
            </div>
            <div className='flex-col hidden justify-end lg:flex'>
                <button className='h-[10rem] w-[25vw]  bg-indigo-600 text-2xl font-semibold hover:bg-indigo-400'>Send</button>
                <div className='h-[4rem] w-[20vw] bg-inherit' />
            </div>
        </div>
    )
}

export default Contact