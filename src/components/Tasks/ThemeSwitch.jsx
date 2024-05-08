import React, { useContext } from 'react'
import { AppStore } from '../../store/app-store';

function ThemeSwitch() {
    const { theme  , changeTheme }  = AppStore( state => state );

    return (
        <button className='w-5 cursor-pointer  ' onClick={changeTheme}>
            {
                theme === 'light' ? <img src="/icon-moon.svg" alt="" /> : <img src="/icon-sun.svg" alt="" />
            }
        </button>
    )


}

export default ThemeSwitch
