import { ReactNode } from 'react'
import styles from './scrollX.module.scss'

interface Props {
  children: ReactNode
}

const ScrollX = ({ children }: Props) => {
  return <ul className={styles.scrollX}>{children}</ul>
}

export default ScrollX
