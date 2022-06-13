import { MouseEventHandler, ReactNode } from 'react'

import { CloseBtnIcon, CloseArrowBtnIcon } from 'assets/svg'
import styles from './headBtn.module.scss'
import { cx } from 'styles'

interface Props {
  children: ReactNode
  closeBtn?: boolean
  onClick?: MouseEventHandler
}

const HeadBtn = ({ children, closeBtn, onClick }: Props) => {
  return (
    <div className={styles.headBtn}>
      <button type='button' onClick={onClick} className={cx(styles.icon, { [styles.closeBtn]: closeBtn })}>
        {closeBtn ? <CloseBtnIcon /> : <CloseArrowBtnIcon />}
      </button>
      {children}
    </div>
  )
}

export default HeadBtn
