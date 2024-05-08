import React, { useContext, useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import TasksListFooter from './TasksListFooter'
import { AppContext } from '../../contexts/AppContext'
import classNames from 'classnames';
import { Reorder } from 'framer-motion';
import NoTasksFound from './NoTasksFound';
import { AppStore } from '../../store/app-store';

function TasksList() {

    const { theme, tasks, currentFilter , reorderTasks } = AppStore(state => state);
    const [filtredTasks, setFiltredTasks] = useState([...tasks]);

    useEffect(() => {

        switch (currentFilter) {
            case 'all':
                setFiltredTasks(tasks);
                break;
            case 'active':
                    setFiltredTasks(() => {
                        const newTasks = [...tasks.filter(item => !item.isCompleted)];
                        return newTasks;
                    });
                break;
            case 'completed':
                setFiltredTasks(() => {
                    const newTasks = [...tasks.filter(item => item.isCompleted)];
                    return newTasks;
                });
                break;
            default:
                setFiltredTasks(tasks);
                break;
        }

    }, [currentFilter , tasks ]);




    const tasksWrapperStyle = classNames('rounded-[5px] text-xs mt-4 divide-y-[1px] ', {
        'bg-very-dark-grayish-violet divide-pale-gray/10  ': theme === 'dark',
        'bg-white': theme === 'light',
        'shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] ': theme === 'light'
    });

    const handleReorder = (newFiltredTasks) => {
        //reorderTasks(newFiltredTasks)
        setFiltredTasks(newFiltredTasks);
    }


    return (


        <>
            <Reorder.Group axis='y' values={tasks} as='div' onReorder={handleReorder} >

                <div className={tasksWrapperStyle} >
                    {
                        filtredTasks.length > 0 ?
                            filtredTasks.map((task) => <TaskItem key={task.id} task={task} theme={theme} />)
                            :
                            <NoTasksFound theme={theme} />

                    }
                    <TasksListFooter />
                </div>

            </Reorder.Group>
        </>

    )
}

export default TasksList
