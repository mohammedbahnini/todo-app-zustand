import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';
import { AppStore } from '../../store/app-store';

function AppWrapper({children}) {
    const { theme } =AppStore( state => state );

    const style = classNames('relative z-0 min-h-screen' ,{
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
