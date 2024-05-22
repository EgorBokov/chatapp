import { ChangeEvent } from 'react'
import cn from 'classnames'

import styles from './Checkbox.module.scss'

type ICheckboxProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: boolean;
    className?: string;
}

export const Checkbox = ({ value, onChange, className }: ICheckboxProps) => {
    return (
        <input className={cn(styles.container, className)} type="checkbox" checked={value} onChange={onChange}  />
    )
}