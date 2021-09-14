import React from 'react'

const Logo = () => {
    return (
        <div className='flex p-px relative'>
            <div className='w-10 h-10 bg-red-600 rounded-3xl absolute animate-pulse'>
            </div>
            <div className='w-10 h-10 bg-yellow-400 rounded-3xl absolute left-10 animate-pulse'>
            </div>
            <div className='w-10 h-10 bg-green-500 rounded-3xl absolute left-20 animate-pulse'>
            </div>
            <h1 className='text-4xl font-black text-gray-700 z-20 text-center pl-8 font-niconne'>S|B</h1>
        </div>
    )
}

export default Logo
