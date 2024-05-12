import React from 'react'
import { AppStore } from '../../store/app-store';

function ThemeSwitch() {
    const { theme, changeTheme } = AppStore(state => state);

    const handleThemeSwitch = () => {
        changeTheme();
        
    }

    return (
        <button className='w-5 cursor-pointer  ' onClick={handleThemeSwitch}>
            {
                theme === 'light' ? <img src="/icon-moon.svg" alt="" /> : <img src="/icon-sun.svg" alt="" />
            }
        </button>
    )


}

export default ThemeSwitch
