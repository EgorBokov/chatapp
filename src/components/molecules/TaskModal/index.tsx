import { FormEvent } from 'react'
import { Modal } from '@/components/molecules/Modal'
import { ICommonModalProps } from '@/utils/types/common'
import { Input } from '@/components/atoms/Input'
import { Button } from '@/components/atoms/Button'
import { addTask } from '@/store/tasks/tasksSlice.ts'
import { useDispatchTyped } from '@/utils/hooks/useDispatchTyped.ts'
import { useUuid } from '@/utils/hooks/useUuid.ts'

import styles from './TaskModal.module.scss'
import cn from 'classnames';

type ITaskModalProps = {
    className?: string;
} & ICommonModalProps

interface TaskFormController extends HTMLFormControlsCollection {
    title: HTMLInputElement;
    description: HTMLInputElement;
}

interface TaskForm extends HTMLFormElement {
    readonly elements: TaskFormController;
}

export const TaskModal = ({ closeHandler, isOpen, className }: ITaskModalProps) => {
    const dispatch = useDispatchTyped()

    const handleOnSubmit = (event: FormEvent<TaskForm>) => {
        event.preventDefault()
        const { title, description } = event.currentTarget.elements

        const preTaskElement = {
            id: useUuid(),
            title: title.value || 'Untitled',
            description: description.value,
            isCompleted: false,
        }

        dispatch(addTask(preTaskElement))
        closeHandler?.()
    }

    if (!isOpen) {
        return null
    }

    return (
        <Modal className={styles.modalContainer} closeHandler={closeHandler} isOpen={isOpen}>
            <div className={cn(styles.container, className)}>
                <h3 className={styles.title}>Task Description</h3>
                <form className={styles.form} onSubmit={handleOnSubmit}>
                    <Input name="title" type="text" placeholder="Заголовок" />
                    <Input name="description" type="text" placeholder="Описание" />
                    <Button className={styles.button} type="submit">Submit Task</Button>
                </form>
            </div>
        </Modal>
    )
}