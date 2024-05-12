import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import { initTasks } from "./init-tasks";
import { ActionAddTask, ActionChangeTaskStatus, ActionFilterTasks, ActionRemoveCompleted, ActionRemoveTask, ActionReorderTasks, ActionSwitchTheme } from "./actions";


export const AppStore = create(
    devtools(
        (set) => ({
            theme: localStorage.getItem('theme') || 'dark',
            tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [...initTasks],
            filters: ['all', 'active', 'completed'],
            currentFilter: 'all',
            changeTheme: () => ActionSwitchTheme(set),
            addTask: (task) => ActionAddTask(set, task),
            changeTaskStatus: (id) => ActionChangeTaskStatus(set, id),
            removeTask: (id) => ActionRemoveTask(set, id),
            filterTasks: (filter) => ActionFilterTasks(set, filter),
            removeCompleted: () => ActionRemoveCompleted(set),
            reorderTasks: (newOrderdTasks) => ActionReorderTasks(set, newOrderdTasks)
        }) , {
            name : 'my-store'
        }
    )
)