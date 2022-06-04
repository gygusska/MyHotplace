import { ChangeEventHandler } from 'react'
import styles from './input.module.scss'

interface Prop {
  label?: string
  name: string
  value: string | string[]
  onChage?: ChangeEventHandler
  placeholder?: string
  inputType?: string
}

const Input = ({ label, name, value, onChage, placeholder, inputType }: Prop) => {
  return (
    <div className={styles.inputBox}>
      {label && <label className={styles.subTitle}>{label}</label>}
      {inputType === 'textarea' ? (
        <textarea name={name} onChange={onChage}>
          {value}
        </textarea>
      ) : (
        <input name={name} type={inputType} value={value} onChange={onChage} placeholder={placeholder} />
      )}
    </div>
  )
}

export default Input
