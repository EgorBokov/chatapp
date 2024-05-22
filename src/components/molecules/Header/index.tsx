import cn from 'classnames'
import { Button } from '@/components/atoms/Button'
import styles from './Header.module.scss'


type IHeaderProps = {
    onModalOpen: () => void;
    className?: string;
}

export const Header = ({ onModalOpen, className }: IHeaderProps) => {
    const addTask = () => {
        onModalOpen()
    }

    return (
        <header className={cn(styles.container, className)}>
            <Button
                className={styles.modalButton}
                onClick={addTask}
            >
                Add Task
            </Button>
        </header>
    )
}