import React from 'react'
import ThemeSwitch from '../Tasks/ThemeSwitch'

function Header() {
    return (
        <div className='flex justify-between items-center pt-12 md:pt-[70px] ' > 
            <h1 className='uppercase text-white font-bold tracking-[8px]  text-2xl md:text-[40px] md:w-[25px] md:tracking-[15px]  '>todo</h1>
            <ThemeSwitch />
        </div>
    )
}

export default Header
