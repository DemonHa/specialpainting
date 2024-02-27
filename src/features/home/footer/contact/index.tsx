import React from 'react'

const prefilledStyles = {
    WebkitTextFillColor: 'rgba(255,255,255,0.6)',
    transition: 'background-color 5000s ease-in-out 0s',
}


const Contact = () => {
    return (
        <div className='flex divide-x divide-slate-700'>
            <div className='flex-col flex-1 flex justify-end  h-[40rem]'>
                <div className='ml-8 text-5xl font-semibold mb-12'>Contact us</div>
                <div>
                    <div className='grid grid-cols-2'>
                        <input style={prefilledStyles} className='bg-inherit border border-slate-700 h-16 focus:outline-none px-8 text-white ' placeholder='Full name' />
                        <input style={prefilledStyles} className='bg-inherit border border-slate-700 h-16 focus:outline-none px-8 text-white' placeholder='Email' />
                        <input style={prefilledStyles} className='bg-inherit border border-slate-700 h-16 focus:outline-none px-8 text-white' placeholder='Phone (optional)' />
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <textarea style={prefilledStyles} className='w-full bg-inherit border border-slate-700 h-48 resize-none focus:outline-none px-8 py-5' placeholder='How can we help you?' />
                        <div className='h-[4rem] w-[10rem] bg-indigo-600' />
                    </div>
                </div>
            </div>
            <div className='flex-col flex justify-end'>
                <button className='h-[10rem] w-[25vw]  bg-indigo-600 text-2xl font-semibold hover:bg-indigo-400'>Send</button>
                <div className='h-[4rem] w-[20vw] bg-inherit' />
            </div>
        </div>
    )
}

export default Contact