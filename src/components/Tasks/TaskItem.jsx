import classNames from 'classnames';
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext';
import { Reorder } from 'framer-motion';
import TaskGradientCircle from './TaskGradientCircle';
import { AppStore } from '../../store/app-store';

function TaskItem(props) {
    const {  changeTaskStatus , removeTask } = AppStore( state => state );
    const { task , theme   } = props;
    const { isCompleted , id } = task;




    const textStyle = classNames('flex-1 cursor-pointer md:text-lg', {
        'text-light-gray line-through': isCompleted,
        'opacity-20': theme === 'dark' && isCompleted,
        'text-light-gray ': theme === 'dark',
        'text-pale-gray': theme === ''
    });

    const taskWrapperStyle = classNames('outline-[1px] outline -outline-offset-2 aspect-square w-5 rounded-full flex items-center justify-center relative md:w-6 ', {
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
        <Reorder.Item value={task} id={task} as='div'>

            <div className='px-5 py-4 md:py-6'>
                <div className='flex items-center gap-x-3 text-dark-blue  md:gap-x-6'>
                    <div className={taskWrapperStyle} onClick={handleChangeTaskStatus} >

                        {isCompleted && <TaskGradientCircle handleChangeTaskStatus={handleChangeTaskStatus}  />}

                    </div>
                    <p className={textStyle} >{task.text}</p>
                    
                    <div className='w-3 aspect-square cursor-pointer ' onClick={handleRemove}>
                        <img src="/icon-cross.svg" alt="" />
                    </div>
                </div>

            </div>
        </Reorder.Item>
    )
}

export default TaskItem
