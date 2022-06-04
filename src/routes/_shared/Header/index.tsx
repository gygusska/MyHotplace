import styles from './header.module.scss'
import { Logo, MenuBtn } from 'assets/svg'

import { NavLink } from 'react-router-dom'

import { useMount } from 'react-use'
import { useCheckLogin } from '../../../hooks'

const Header = () => {
  const { logOut, loginCheck, userId } = useCheckLogin()
  useMount(() => {
    loginCheck()
  })
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <NavLink to='/'>
          <Logo />
        </NavLink>
      </div>
      <button type='button'>
        <MenuBtn />
      </button>
      {/* <ul className={styles.menu}>
        <li>
          <NavLink to='/profile'>프로필 수정</NavLink>
        </li>
        <li>
          <button type='button' onClick={logOut}>
            로그아웃
          </button>
        </li>
      </ul> */}
    </div>
  )
}

export default Header
