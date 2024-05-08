import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export const AppStore = create(devtools(
    (set) => ({
        theme: 'dark',
        tasks: [
            {
                id: 1,
                text: 'Complete online JavaScript course',
                isCompleted : true
            },
            {
                id: 2,
                text: 'Jog around the park 3x',
                isCompleted: false
            },
            {
                id: 3,
                text: '10 minutes meditation',
                isCompleted: false
            },
            {
                id: 4,
                text: 'Read for 1 hour',
                isCompleted: false
            },
            {
                id: 5,
                text: 'Pick up groceries',
                isCompleted: false
            },
            {
                id: 6,
                text: 'Complete Todo App on Frontend Mentor',
                isCompleted: false
            }
        ],
        filters: ['all', 'active', 'completed'],
        currentFilter: 'all',
        changeTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
        addTask: (task) => set(state => ({ tasks: [...state.tasks, task] })),
        changeTaskStatus: (id) => set(state => ({ tasks: [...state.tasks.map(item => ({ ...item, isCompleted: item.id === id ? !item.isCompleted : item.isCompleted }))] })),
        removeTask: (id) => set(state => ({ tasks: [...state.tasks.filter(item => item.id !== id)] })),
        filterTasks: (filter) => set(prevState => ({ ...prevState, currentFilter: filter })),
        removeCompleted: () => set(state => ({ ...state, tasks: [...state.tasks.filter((item) => !item.isCompleted)] })) , 
        reorderTasks : (newOrderdTasks) => set( state => ({tasks : [...newOrderdTasks]}))
    })
))