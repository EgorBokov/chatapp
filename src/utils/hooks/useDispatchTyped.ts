import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'

export const useDispatchTyped = useDispatch.withTypes<AppDispatch>()