import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext';
import { AppStore } from '../../store/app-store';

function FilterItem(props) {
    const { theme , currentFilter , filterTasks} = AppStore( state => state )
    const { children }= props;
    const  isActive  = currentFilter === children;
    
    
    const btn = classNames('font-bold text-base capitalize   ' , { 
        'text-light-blue' : isActive ,
        'text-dark-gray ' : !isActive  , 
        'hover:text-white ' : theme === 'dark' && !isActive, 
        'hover:text-dark-blue ' : theme === 'light' && !isActive
    })


    const handleClick = (e)=>{
        filterTasks(children);
    }


    return (
        <button className={btn} onClick={handleClick}>{children}</button>
    )
}

export default FilterItem
