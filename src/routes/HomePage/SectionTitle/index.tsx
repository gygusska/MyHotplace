import NavBtn from 'components/NavBtn'
import Typography from 'components/Typography'
import styles from './title.module.scss'

interface Props {
  link: string
  subTitle: string
}

const SectionTitle = ({ link, subTitle }: Props) => {
  return (
    <div className={styles.titleWrap}>
      <Typography variant='h3'>{subTitle}</Typography>
      <NavBtn toLink={link}>더보기</NavBtn>
    </div>
  )
}

export default SectionTitle
