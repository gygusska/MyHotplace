import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'

import Header from '../Header'
import Loader from '../Loader'

const Layout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </Suspense>
  )
}

export default Layout
