import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { TasksElement } from '@/utils/types/todo';
import { getFromStorage, setToStorage, TODO_STORAGE } from '@/utils/storage'

export type TasksState = {
    tasks: TasksElement[];
}

const tasksFromStorage = JSON.parse(getFromStorage(TODO_STORAGE) || '[]')

const initialState: TasksState = {
    tasks: tasksFromStorage,
}

export const tasksSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, { payload }: PayloadAction<TasksElement>) => {
            state.tasks.push(payload)
            setToStorage(TODO_STORAGE, state.tasks)
        },
        removeTask: (state, { payload }: PayloadAction<string>) => {
            const elementPositionIndex = state.tasks.findIndex((element) => element.id === payload)

            state.tasks.splice(elementPositionIndex, 1)
            setToStorage(TODO_STORAGE, state.tasks)
        },
        changeTaskState: (state, { payload }: PayloadAction<{ id: string, isCompleted: boolean }>) => {
            const elementPositionIndex = state.tasks.findIndex((element) => element.id === payload.id)
            const foundElement = state.tasks[elementPositionIndex]

            foundElement.isCompleted = payload.isCompleted
            setToStorage(TODO_STORAGE, state.tasks)
        },
        clearState: (state) => {
            state.tasks = []
        }
    }
})

export const { clearState, changeTaskState, addTask, removeTask  } = tasksSlice.actions