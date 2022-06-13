import PopupPortal from 'components/PopupPortal'
import HeadBtn from 'components/HeadBtn'
import StarRating from 'components/StarRating'
import Input from 'components/Input'
import Button from 'components/Button'
import styles from './placeEditFormModal.module.scss'
import { AddFileIcon } from 'assets/svg'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

interface Props {
  setIsAddModal: Dispatch<SetStateAction<boolean>>
}

const PlaceEditFormModal = ({ setIsAddModal }: Props) => {
  const [formData, setFormData] = useState({
    hotName: '',
    hotAddress: '',
    hotMemo: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget
    setFormData((prevState) => {
      return { ...prevState, [name]: value }
    })
  }

  const handleCloseModal = () => {
    setIsAddModal((prevState) => !prevState)
  }

  return (
    <PopupPortal>
      <div className={styles.modalBackground}>
        <HeadBtn closeBtn onClick={handleCloseModal}>
          핫플레이스 추가
        </HeadBtn>
        <div className={styles.modalWrapper}>
          <label htmlFor='addFile' className={styles.fileLabel}>
            <div className={styles.fileText}>
              <AddFileIcon />
              이미지 등록
            </div>
            <input type='file' id='addFile' className={styles.fileInput} />
          </label>

          <h4>16:9 비율의 이미지를 등록해주세요</h4>
          <StarRating />
          <Input
            name='hotName'
            value={formData.hotName}
            label='핫플 이름'
            placeholder='핫플의 이름을 입력해주세요'
            inputType='text'
            onChage={handleInputChange}
          />
          <Input
            name='hotAddress'
            value={formData.hotAddress}
            label='주소 등록'
            placeholder='이곳을 눌러 검색해주세요'
            inputType='text'
            onChage={handleInputChange}
          />
          <Input
            name='hotMemo'
            value={formData.hotMemo}
            label='핫플 메모'
            inputType='textarea'
            placeholder='내용을 입력해주세요'
            onChage={handleInputChange}
          />
          <Button type='submit' size='extraLarge' primary className={styles.submitBtn}>
            작성 완료
          </Button>
        </div>
      </div>
    </PopupPortal>
  )
}

export default PlaceEditFormModal
