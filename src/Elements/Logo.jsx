import React from 'react'

const Logo = () => {
    return (
        <div className='flex p-px relative'>
            <div className='w-10 h-10 bg-blue-500 rounded-3xl absolute z-10 animate-pulse'>
            </div>
            <div className='w-10 h-10 bg-green-500 rounded-3xl absolute left-10 z-10 animate-pulse'>
            </div>
            <div className='w-10 h-10 bg-pink-500 rounded-3xl absolute left-20 z-10 animate-pulse'>
            </div>
            <h1 className='text-4xl font-black text-white text-center z-20 pl-8 font-allison'>S|B</h1>
        </div>
    )
}

export default Logo
