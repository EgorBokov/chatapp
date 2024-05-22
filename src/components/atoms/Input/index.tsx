import {ChangeEvent, InputHTMLAttributes, ReactNode, useId} from 'react'
import styles from './Input.module.scss'

type IInputProps = {
    label?: ReactNode;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, value, onChange, ...inputProps }: IInputProps) => {
    const inputId = useId()

    return (
        <div className={styles.container}>
            {label && <label htmlFor={inputId}>{label}</label>}
            <input
                id={inputId}
                type="text"
                value={value}
                onChange={onChange}
                {...inputProps}
            />
        </div>
    )
}