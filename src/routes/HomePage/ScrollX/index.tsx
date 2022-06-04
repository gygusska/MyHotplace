import { ReactNode } from 'react'
import styles from './scrollX.module.scss'

interface Props {
  children: ReactNode
}

const ScrollX = ({ children }: Props) => {
  return <div className={styles.scrollX}>{children}</div>
}

export default ScrollX
