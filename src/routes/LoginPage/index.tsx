import { FormEvent, useEffect, useReducer, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

import dayjs from 'dayjs'
import { cx } from 'styles'
import store from 'store'

import { useInputValid } from './hooks'
import { inputReducer } from './reducers'
import { errorMsgSet, INPUT_INIT } from './utils'

import SEO from 'components/SEO'
import Button from 'components/Button'
import Typography from 'components/Typography'
import LoginInput from './LoginInput'
import PopupPortal from './Popup/PopupPortal'
import Popup from './Popup'
import { LoginLogo, LoginImg } from 'assets/svg'

import styles from './loginPage.module.scss'

const LoginPage = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [isLoginActive, setIsLoginActive] = useState(false)
  const [inputState, dispatchInputState] = useReducer(inputReducer, INPUT_INIT)

  const navigate = useNavigate()

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isLoginActive) return

    if (
      inputState.id.value === process.env.REACT_APP_ADMIN_ID &&
      inputState.pw.value === process.env.REACT_APP_ADMIN_PW
    ) {
      store.set('login', { isLoggedIn: true, expire: dayjs().add(7, 'hour'), id: inputState.id.value })
      navigate('/')
      return
    }

    setIsOpenPopup(true)
  }

  useEffect(() => {
    if (inputState.id.isValid && inputState.pw.isValid) {
      setIsLoginActive(true)
      return
    }

    setIsLoginActive(false)
  }, [inputState.id.isValid, inputState.pw.isValid])

  useInputValid(inputState, dispatchInputState)

  return (
    <div className={styles.loginPage}>
      <SEO title='로그인' />
      <LoginImg />
      <LoginLogo />
      <form className={styles.loginForm}>
        <Typography variant='h4'>아이디</Typography>
        <LoginInput inputType='id' state={inputState} dispatch={dispatchInputState} />
        <div className={styles.guideWrapper}>
          <p className={cx(styles.guide, { [styles.warning]: inputState.id.warning })}>
            {inputState.id.displayMessage ? errorMsgSet.id : ''}
          </p>
        </div>
        <Typography variant='h4'>비밀번호</Typography>
        <LoginInput inputType='pw' state={inputState} dispatch={dispatchInputState} />
        <div className={styles.guideWrapper}>
          <p className={cx(styles.guide, { [styles.warning]: inputState.pw.warning })}>
            {inputState.pw.displayMessage ? errorMsgSet.pw : ''}
          </p>
        </div>
        <Button size='extraLarge' primary={isLoginActive} onClick={loginHandler} type='submit'>
          로그인
        </Button>
      </form>
      <NavLink to='/SighUpPage' className={styles.signUpLink}>
        회원이 아니신가요?
      </NavLink>
      <PopupPortal>{isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}</PopupPortal>
    </div>
  )
}
export default LoginPage
