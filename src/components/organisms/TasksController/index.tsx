import { ChangeEvent, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { tasksSelector } from '@/store/selectors/tasksSelector.ts'
import { changeTaskState, removeTask } from '@/store/tasks/tasksSlice.ts';
import { TaskView } from '@/components/molecules/TaskView'
import { Badge } from '@/components/atoms/Badge';
import { useDispatchTyped } from '@/utils/hooks/useDispatchTyped.ts'

import styles from './TaskController.module.scss'

export const TasksController = () => {
    const dispatch = useDispatchTyped()
    const tasks = useSelector(tasksSelector)
    const [isCompletedSort, setIsCompletedSort] = useState(false)

    const filteredTasks = useMemo(() => {
        return tasks.filter((element) => {
            if (isCompletedSort) {
                return element.isCompleted
            }

            return element
        })
    }, [tasks, isCompletedSort])

    if (!tasks.length) {
        return (
            <div>
                Look's like you've done all of your tasks!
                <p className={styles.congartsTitle}>Congratulations!</p>
            </div>
        )
    }

    const handleOnChange = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
        const isCompleted = event.target.checked

        dispatch(changeTaskState({  id, isCompleted }))
    }

    const handleRemoveTask = (id: string) => () => {
        dispatch(removeTask(id))
    }

    const changeSortType = (value: boolean) => {
        setIsCompletedSort(value)
    }

    return (
        <div className={styles.commonWrapper}>
            <div className={styles.filtersContainer}>
                <Badge
                    title="Выполненные"
                    isChosen={isCompletedSort}
                    onChange={changeSortType}
                />
            </div>
            <div className={styles.container}>
                {filteredTasks.map(({ id, description, isCompleted, title }) => (
                    <TaskView
                        key={id}
                        id={id}
                        description={description}
                        isCompleted={isCompleted}
                        title={title}
                        onCheckChange={handleOnChange(id)}
                        onTaskRemove={handleRemoveTask(id)}
                        className={styles.taskElement}
                    />
                ))}
            </div>
        </div>
    )
}