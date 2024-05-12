import React from 'react'
import TaskItem from './TaskItem';
import NoTasksFound from './NoTasksFound';

function TasksList(props) {
    const { tasks, theme , activeId } = props;

    return (
        <>

            {
                tasks.findIndex(task => task.filterMatched) == -1 ?
                    <NoTasksFound theme={theme} />
                    :
                    tasks
                        .filter(task => task.filterMatched)
                        .map((task, index) => <TaskItem 
                        key={task.id} 
                        task={task} 
                        theme={theme} 
                        index={index}
                        activeId={activeId} />)
            }
        </>
    )
}

export default TasksList
