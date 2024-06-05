import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-md'>
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                <div className='flex items-center'>
                    <img src="" alt="" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' />
                </div>
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                    </ul>
                </div>
                <div className='md:hidden'>
                    <img src="" alt="" className='w-[28px] h-[28px] object-contain mr-10' />
                </div>
            </div>
                <ul className='absolute bg-white w-full px-8 md:hidden'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                </ul>
        </div>
    )
}

export default Navbar