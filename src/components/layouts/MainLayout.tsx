import { ReactNode, useState } from 'react'
import { Header } from '@/components/molecules/Header'
import { TaskModal } from '@/components/molecules/TaskModal'

import styles from './MainLayout.module.scss'

type IMainLayoutProps = {
    children: ReactNode
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenTasksModal = () => {
        setIsModalOpen(true)
    }

    const onCloseHandler = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={styles.container}>
            <Header className={styles.header} onModalOpen={handleOpenTasksModal} />
            <TaskModal isOpen={isModalOpen} closeHandler={onCloseHandler} />
            <main className={styles.main}>
                { children }
            </main>
        </div>
    )
}