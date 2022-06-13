import { ChangeEventHandler } from 'react'
import styles from './input.module.scss'

interface Prop {
  label?: string
  name: string
  value: string | string[]
  onChage?: ChangeEventHandler
  placeholder?: string
  inputType?: string
  required?: boolean
}

const Input = ({ label, name, value, onChage, placeholder, inputType, required }: Prop) => {
  return (
    <div className={styles.inputBox}>
      {label && <label className={styles.subTitle}>{label}</label>}
      {inputType === 'textarea' ? (
        <textarea name={name} onChange={onChage} value={value} placeholder={placeholder} required />
      ) : (
        <input name={name} type={inputType} value={value} onChange={onChage} placeholder={placeholder} required />
      )}
    </div>
  )
}

export default Input
