import React  from 'react'
import classNames from 'classnames';
import { AppStore } from '../../store/app-store';

function AppWrapper({children}) {
    const { theme } = AppStore( state => state );

    const style = classNames('relative z-0 min-h-screen transition-theme{' ,{
        'bg-pale-gray' : theme === 'light' , 
        'bg-very-dark-blue' : theme === 'dark' , 

    });

    return (
        <div className={style}>
            {children}
        </div>
    )
}

export default AppWrapper
