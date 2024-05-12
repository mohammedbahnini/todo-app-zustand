import React, { useState } from 'react'
import { AppStore } from '../../store/app-store';
import TasksContainer from './TasksContainer';
import { DndContext, closestCorners, useSensor, PointerSensor, KeyboardSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TasksList from './TasksList';
import TasksListFooter from './TasksListFooter';

function Tasks() {

    const { theme, tasks, reorderTasks } = AppStore(state => state);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    const [activeID, setActiveID] = useState(null);



    const handleDragEnd = (e) => {
        const { active, over } = e;
        setActiveID(null);
        if (active.id !== over.id) {


            const activeIndex = tasks.findIndex(task => task.id === active.id);
            const overIndex = tasks.findIndex(task => task.id === over.id);


            const newSortedTasks = arrayMove(tasks, activeIndex, overIndex);
            reorderTasks(newSortedTasks);

        }
    }

    const handleDragStart = (e) => {
        setActiveID(e.active.id);
        console.log(e);
    }


    return (


        <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            onDragStart={handleDragStart}


        >

            <SortableContext items={tasks} id='id-1' strategy={verticalListSortingStrategy}  >
                <TasksContainer theme={theme}  >
                    <TasksList tasks={tasks} theme={theme} activeId={activeID} />
                    <TasksListFooter />
                </TasksContainer>
            </SortableContext>

        </DndContext>

    )
}

export default Tasks
