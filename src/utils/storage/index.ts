export const TODO_STORAGE = 'TODO_STORAGE'

export const getFromStorage = (key: string) => localStorage.getItem(key)
export const setToStorage = (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value))