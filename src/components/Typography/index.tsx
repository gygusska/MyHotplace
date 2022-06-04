import { ReactNode } from 'react'
import styles from './typography.module.scss'

interface Props {
  variant: 'body' | 'h2' | 'h3' | 'h4'
  children: ReactNode
}

const Typography = ({ variant, children }: Props) => {
  const variantMap = (text: ReactNode) =>
    ({
      body: <p className={styles.typoBody}>{text}</p>,
      h2: <h2 className={styles.typoH2}>{text}</h2>,
      h3: <h3 className={styles.typoH3}>{text}</h3>,
      h4: <h4 className={styles.typoH4}>{text}</h4>,
    } as Record<Props['variant'], React.ReactElement>)
  return variantMap(children)[variant]
}

export default Typography
