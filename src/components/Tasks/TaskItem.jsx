import classNames from 'classnames';
import React, { memo, useMemo } from 'react'
import { AppStore } from '../../store/app-store';
import { defaultAnimateLayoutChanges, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import TaskCompletedMark from './TaskGradientCircle';
import { MeasuringStrategy } from '@dnd-kit/core';



const TaskItem =  (props) => {
    const { changeTaskStatus, removeTask } = AppStore(state => state);
    const { task, theme , activeId} = props;
    const { isCompleted, id } = task;



    

    const { attributes, listeners, setNodeRef, transform, transition  } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };


    const tasksWrapperStyle = classNames('px-5 py-4 md:py-6  relative task-container  transition-theme ', {
        'bg-very-dark-grayish-violet divide-pale-gray/10  ': theme === 'dark',
        'bg-white': theme === 'light', 
        'shadow-lg z-10' : activeId === id 
    });



    const textStyle = classNames('flex-1 md:text-lg transition-theme', {
        'text-light-gray line-through': isCompleted,
        'opacity-20': theme === 'dark' && isCompleted,
        'text-light-gray ': theme === 'dark',
        'text-pale-gray': theme === ''
    });

    const taskWrapperStyle = classNames('outline-[1px] outline -outline-offset-2 aspect-square w-5 rounded-full flex items-center justify-center relative md:w-6 transition-theme  cursor-pointer   ', {
        'outline-light-gray/20 ': theme === 'dark',
        'outline-light-gray ': theme === 'light'
    });

    const handleChangeTaskStatus = () => {
        changeTaskStatus(id);
        
    }

    const handleRemove = () => {
        removeTask(id);
    }





    return (
        <div
            className={tasksWrapperStyle}

            ref={setNodeRef}
            style={style}
        >
            <div className='absolute left-1.5 top-[50%] -translate-y-[40%] opacity-100 task-container--move  pointer touch-none '  {...attributes} {...listeners}>
                <span className={classNames('text-sm', {
                    'text-white/50 ': theme === 'dark',
                    'text-dark-blue/50': theme === 'light'
                })}>
                    <i className="fa-solid fa-grip-vertical"></i>
                </span>
            </div>
            <div className='flex items-center gap-x-3 text-dark-blue  md:gap-x-6'>
                <div className={taskWrapperStyle} onClick={handleChangeTaskStatus} >
                    {isCompleted && <TaskCompletedMark handleChangeTaskStatus={handleChangeTaskStatus} />}
                </div>
                <p className={textStyle} >{task.text} <br />{new Date().toTimeString()} </p>
                <div className='w-3 aspect-square cursor-pointer ' onClick={handleRemove}>
                    <img src="/icon-cross.svg" alt="" />
                </div>
            </div>

        </div>


    )
}

export default TaskItem
