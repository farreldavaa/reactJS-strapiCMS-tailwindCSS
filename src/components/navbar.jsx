
import React, {useState} from 'react'

const Navbar = () => {

    const [toggle, setToggle] = useState(false) 
    let handleClick = ()=>setToggle(!toggle)

    return (
        <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-md relative'>
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                <div className='flex items-center'>
                    <img src="../public/images/64LOGO.png" alt="" className='sm:ml-5 ss:ml-5 md:ml-3 opacity-[100%] w-12 h-12' />
                </div>
                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platform</li>
                    </ul>
                </div>
                <div className='md:hidden' onClick={handleClick}>
                    <img src="" alt="" className='w-[28px] h-[28px] object-contain mr-10' />
                </div>
            </div>
                <ul className={toggle?'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                </ul>
        </div>
    )
}

export default Navbar