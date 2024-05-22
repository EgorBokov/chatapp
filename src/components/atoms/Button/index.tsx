import {ButtonHTMLAttributes, ReactNode} from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type IButtonProps = {
    children: ReactNode;
    className?: string;
    onClick?: (...args: any[]) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, className, onClick, ...props }: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.container, className)}
            {...props}
        >
            { children }
        </button>
    )
}