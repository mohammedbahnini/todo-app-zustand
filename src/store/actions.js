const setLocalStorageTasks = tasks => localStorage.setItem('tasks', JSON.stringify(tasks));

export const ActionAddTask = (set, taskToAdd) => {

    set((state) => {
        const newTasks = [...state.tasks, taskToAdd];
        setLocalStorageTasks(newTasks);
        return {
            tasks: [...newTasks]
        }
    })
}

export const ActionSwitchTheme = (set) => {
    set((prevState) => {
        localStorage.setItem('theme', prevState.theme === 'light' ? 'dark' : 'light');
        return {
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }
    })
}

export const ActionChangeTaskStatus = (set, taskID) => {
    set((prevState) => {
        const newTasks = [...prevState.tasks.map(task => ({ ...task, isCompleted: task.id === taskID ? !task.isCompleted : task.isCompleted }))];
        setLocalStorageTasks(newTasks);
        return {
            tasks: [...newTasks]
        }
    })
}

export const ActionRemoveTask = (set, taskID) => {

    set(prevState => {
        const newTaks = [...prevState.tasks.filter(task => task.id !== taskID)];
        setLocalStorageTasks(newTasks);
        return {
            tasks: [...newTaks]
        }
    })
}

export const ActionFilterTasks = (set, filter) => {

    set(prevState => {
        let newFiltredTasks = [
            ...prevState.tasks.map(task => {
                if (filter === 'all')
                    return { ...task, filterMatched: true }
                if (filter === 'active')
                    return { ...task, filterMatched: !task.isCompleted }
                if (filter === 'completed')
                    return { ...task, filterMatched: task.isCompleted }
            })
        ];
        setLocalStorageTasks(newFiltredTasks);
        return {
            currentFilter: filter,
            tasks: [...newFiltredTasks]
        }
    })
}

export const ActionRemoveCompleted = (set)=>{
    set( prevState =>{
        const newTasks = [
            ...prevState.tasks.filter( task => task.isCompleted === false )
        ]
        setLocalStorageTasks(newTasks);
        return {
            tasks : [...newTasks]
        }
    })
}

export const ActionReorderTasks = (set,newOrdredTasks)=>{
    set( prevState =>{
        setLocalStorageTasks(newOrdredTasks);
        return {
            tasks : [...newOrdredTasks]
        }
    })
}