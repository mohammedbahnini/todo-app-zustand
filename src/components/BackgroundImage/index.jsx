import React from 'react'
import { AppStore } from '../../store/app-store'

function BackgroundImage() {
    const { theme   } = AppStore( state => state)

    return (
        <div className='absolute h-[200px] md:h-[300px] top-0 left-0 right-0 -z-[1]  '>
            {
                theme === 'light' ?
                    <img src="/bg-desktop-light.jpg" alt="" className='h-full object-cover w-full' />
                    :
                    <img src="/bg-desktop-dark.jpg" alt="" className='h-full object-cover w-full' />
            }
        </div>
    )
}

export default BackgroundImage
