import React, { useContext } from 'react'
import Filters from '../Filters'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';
import { AppStore } from '../../store/app-store';

function TasksListFooter() {
    const { tasks , theme , removeCompleted } = AppStore( state => state);

    
    const itemsLeft = tasks.reduce( (total, task) => total += task.isCompleted ? 0 : 1, 0);
   
    const clearComletedStyle  = classNames({
        'hover:text-white': theme === 'dark',
        'hover:text-dark-blue': theme === 'light'
    });




    return (
        <div className='px-5 flex justify-between py-5 text-dark-gray text-xs md:text-base '>
            <p>{itemsLeft} items left</p>
            <Filters className='hidden md:block py-0' />
            <button
                className={clearComletedStyle}
                onClick={removeCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default TasksListFooter
