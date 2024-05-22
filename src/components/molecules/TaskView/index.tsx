import { ChangeEvent } from 'react'
import cn from 'classnames';
import { IoClose } from 'react-icons/io5'

import { Checkbox } from '@/components/atoms/Checkbox'
import type { TasksElement } from '@/utils/types/todo'

import styles from './TaskView.module.scss'

type ITaskViewProps = TasksElement & {
    className?: string;
    onCheckChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onTaskRemove: () => void;
}

export const TaskView = ({ title, description, isCompleted, onCheckChange, className, onTaskRemove }: ITaskViewProps) => {
    return (
        <div className={cn(styles.container, className)}>
            <div className={styles.content}>
                <Checkbox className={styles.checkbox} value={isCompleted} onChange={onCheckChange} />
                <div>
                    <h3 className={cn({ [styles.titleCompleted]: isCompleted })}>{ title }</h3>
                    {description && <p>{ description }</p>}
                </div>
            </div>
            <IoClose className={styles.closeIcon} onClick={onTaskRemove} />
        </div>
    )
}