import { useState } from 'react'
import { cx } from 'styles'
import styles from './starRating.module.scss'

interface Props {
  className?: string
}

const StarRating = ({ className }: Props) => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  return (
    <div className={cx(styles.starRating, className)}>
      {[...Array(5)].map((star, idx) => {
        const index = idx + 1
        return (
          <button
            type='button'
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            &#9733;
          </button>
        )
      })}
    </div>
  )
}

export default StarRating
