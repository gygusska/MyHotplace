import { MouseEventHandler, ReactNode } from 'react'

import { CloseBtn, CloseArrowBtn } from 'assets/svg'
import styles from './headBtn.module.scss'
import { cx } from 'styles'

interface Props {
  children: ReactNode
  closeBtn?: boolean
  onClick?: MouseEventHandler
}

const HeadBtn = ({ children, closeBtn, onClick }: Props) => {
  return (
    <button type='button' onClick={onClick} className={styles.headBtn}>
      <div className={cx(styles.icon, { [styles.closeBtn]: closeBtn })}>
        {closeBtn ? <CloseBtn /> : <CloseArrowBtn />}
      </div>
      {children}
    </button>
  )
}

export default HeadBtn
