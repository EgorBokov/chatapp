import { configureStore } from '@reduxjs/toolkit'
import { tasksSlice } from '@/store/tasks/tasksSlice.ts'

export const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch