import {MouseEvent, ReactElement, useEffect} from 'react'
import cn from 'classnames'
import { IoClose } from 'react-icons/io5'
import styles from './Modal.module.scss'

type IModalProps = {
    isOpen: boolean;
    closeHandler?: () => void;
    children: ReactElement;
    className?: string;
}

export const Modal = ({ children, className, isOpen, closeHandler }: IModalProps) => {
    if (!isOpen) {
        return null
    }

    const closeWithNoDefaults = (event: MouseEvent) => {
        if ((event.target as any).id === 'modal-wrapper') {
            closeHandler?.()
        }
    }

    const onEscButtonPressedClose = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler?.()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', onEscButtonPressedClose)

        return () => window.removeEventListener('keydown', onEscButtonPressedClose)
    }, [])

    return (
        <div id="modal-wrapper" className={styles.wrapper} onClick={closeWithNoDefaults}>
            <div className={cn(styles.container, className)}>
                <IoClose onClick={closeHandler} className={styles.closeIcon} />
                { children }
            </div>
        </div>
    )
}