import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navBtn.module.scss'

interface Props {
  children: ReactNode
  toLink: string
}

const NavBtn = ({ children, toLink }: Props) => {
  return (
    <NavLink className={styles.linkBtn} to={toLink}>
      {children}
    </NavLink>
  )
}

export default NavBtn
