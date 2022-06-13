import { useState } from 'react'

import HeadBtn from 'components/HeadBtn'
import Card from 'components/Card'
import Button from 'components/Button'

import styles from './myPlacePage.module.scss'
import PlaceEditFormModal from './PlaceEditFormModal'

const MyPlacePage = () => {
  const [isAddModal, setIsAddModal] = useState(false)

  const handleAddButtonClick = () => {
    setIsAddModal((prevState) => !prevState)
  }

  return (
    <section className={styles.placeWrap}>
      <HeadBtn>나의 핫플레이스</HeadBtn>
      <ul className={styles.placeList}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
      <Button size='large' onClick={handleAddButtonClick} primary addBtn>
        + 추가하기
      </Button>

      {isAddModal && <PlaceEditFormModal setIsAddModal={setIsAddModal} />}
    </section>
  )
}

export default MyPlacePage
