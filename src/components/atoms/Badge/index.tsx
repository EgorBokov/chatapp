import { MouseEvent } from 'react'
import { IoClose } from 'react-icons/io5'
import styles from './Badge.module.scss'
import cn from 'classnames';

type IBadgeProps = {
    title: string;
    isChosen: boolean;
    onChange?: (value: boolean) => void;
    className?: string;
}

export const Badge = ({ title, className, isChosen, onChange }: IBadgeProps) => {
    const choseBadge = () => {
        if (!isChosen) {
            onChange?.(true)
        }
    }

    const removeBadge = (event: MouseEvent<SVGElement>) => {
        event.stopPropagation()
        onChange?.(false)
    }

    return (
        <div
            className={cn(styles.container, className, { [styles.isActive]: isChosen })}
            onClick={choseBadge}
        >
            <span>{ title }</span>
            { isChosen && (
                <IoClose
                    className={styles.closeButton}
                    onClick={removeBadge}
                />
            )}
        </div>
    )
}