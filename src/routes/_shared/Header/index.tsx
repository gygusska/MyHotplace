import styles from './header.module.scss'
import { LogoIcon, MenuBtnIcon } from 'assets/svg'

import { NavLink } from 'react-router-dom'

import { useClickAway, useMount } from 'react-use'
import { useCheckLogin } from '../../../hooks'
import { useRef, useState } from 'react'

const Header = () => {
  const { logOut, loginCheck, userId } = useCheckLogin()
  useMount(() => {
    loginCheck()
  })

  const [isListOpen, setIsListOpen] = useState(false)
  const outsideRef = useRef<HTMLInputElement>(null)

  const handleSelectedClick = () => {
    setIsListOpen((prev) => !prev)
  }

  useClickAway(outsideRef, () => {
    setIsListOpen(false)
  })

  return (
    <div className={styles.header} ref={outsideRef}>
      <div className={styles.logo}>
        <NavLink to='/'>
          <LogoIcon />
        </NavLink>
      </div>
      <button type='button' onClick={handleSelectedClick}>
        <MenuBtnIcon />
      </button>
      {isListOpen && (
        <ul className={styles.menu}>
          <li>
            <NavLink to='/profile'>프로필 수정</NavLink>
          </li>
          <li>
            <button type='button' onClick={logOut}>
              로그아웃
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
