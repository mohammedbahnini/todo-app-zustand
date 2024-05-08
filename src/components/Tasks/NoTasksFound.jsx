import classNames from 'classnames';
import React from 'react'

function NoTasksFound({ theme }) {
    const textStyle = classNames('flex-1 cursor-pointer md:text-lg', {
        'text-light-gray ': theme === 'dark',
        'text-dark-blue': theme === 'light'
    });

    return (
        <div className='px-5 py-4 md:py-6'>
            <p className={textStyle}>No tasks found</p>
        </div>
    )
}

export default NoTasksFound
