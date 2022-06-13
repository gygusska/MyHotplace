import { MouseEventHandler } from 'react'
import styles from './card.module.scss'

interface Props {
  onClick?: MouseEventHandler
  dataSeq?: string
}

const Card = ({ onClick, dataSeq }: Props) => {
  return (
    <li>
      <button onClick={onClick} type='button' className={styles.cardWrap} data-card-seq={dataSeq}>
        <div className={styles.cardInfo}>
          <div className={styles.cardRating}>별별별별</div>
          <h3 className={styles.cardTitle}>신사역 BAS BUGER 패티</h3>
          <p className={styles.cardDate}>2020.10.20</p>
        </div>
      </button>
    </li>
  )
}

export default Card
