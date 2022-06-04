import { Route, Routes } from 'react-router-dom'

import Layout from './_shared/Layout'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import ThemePage from './ThemePage'
import ProfilePage from './ProfilePage'
import MyPlacePage from './MyPlacePage'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='login' element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/place' element={<MyPlacePage />} />
          <Route path='/theme' element={<ThemePage />} />
        </Route>
        <Route path='*' element={<div>잘못 된 접근입니다.</div>} />
      </Routes>
    </div>
  )
}

export default App
