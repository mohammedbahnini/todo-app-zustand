import React from 'react'
import classNames from 'classnames';
import TasksListFooter from './TasksListFooter';

function TasksContainer(props) {

    const { theme } = props;

    const tasksWrapperStyle = classNames('rounded-[5px] text-xs mt-4 divide-y-[1px] bg-pale-gray/10 transition-theme', {
        'bg-very-dark-grayish-violet divide-pale-gray/10  ': theme === 'dark',
        'bg-white': theme === 'light',
        'shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ': theme === 'light' 

    });


    return (
        <div className={tasksWrapperStyle} >
            {props.children}
          
        </div>
    )
}

export default TasksContainer
