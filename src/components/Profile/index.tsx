import cx from 'classnames'
import styles from './profile.module.scss'

interface Props {
  imgUrl: string
  size: 'small' | 'medium' | 'large'
}

const Profile = ({ imgUrl, size }: Props) => {
  return (
    <div className={cx(styles[size], styles.profile)}>
      <img src={imgUrl} alt='profile' />
    </div>
  )
}

export default Profile
