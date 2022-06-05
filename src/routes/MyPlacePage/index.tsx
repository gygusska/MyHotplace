import HeadBtn from 'components/HeadBtn'
import Card from 'components/Card'

import styles from './myPlacePage.module.scss'
import Button from 'components/Button'

const MyPlacePage = () => {
  return (
    <section className={styles.placeWrap}>
      <HeadBtn>나의 핫플레이스</HeadBtn>
      <div className={styles.placeList}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default MyPlacePage
