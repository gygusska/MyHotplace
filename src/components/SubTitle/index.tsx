import styles from './subTitle.module.scss'

interface Props {
  text: string
}

const SubTitle = ({ text }: Props) => {
  return <h2 className={styles.subTitle}>{text}</h2>
}

export default SubTitle
