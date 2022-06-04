import React, { useState } from 'react'

import Card from 'components/Card'
import Circle from 'components/Circle'
import Profile from 'components/Profile'
import Typography from 'components/Typography'
import styles from './homePage.module.scss'
import profile from 'assets/img/profile.jpg'
import SectionTitle from './SectionTitle'
import Banner from './Banner'
import ScrollX from './ScrollX'

const HomePage = () => {
  return (
    <div className={styles.homePageWrap}>
      <section className={styles.homeProfile}>
        <Profile imgUrl={profile} size='small' />
        <Typography variant='h2'>HyoHyun</Typography>
        <Typography variant='body'>
          핫플 디깅을 즐깁니다.
          <br /> 핫플 탐방 같이 가실 분들 언제든지 환영! 👍
        </Typography>
      </section>
      <section className={styles.homePlace}>
        <SectionTitle link='place' subTitle='나의 핫플레이스' />
        <ScrollX>
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollX>
      </section>
      <section className={styles.homeBanner}>
        <Banner />
      </section>
      <section className={styles.homeTheme}>
        <SectionTitle link='theme' subTitle='나의 테마' />
        <ScrollX>
          <Circle />
          <Circle />
          <Circle />
          <Circle />
        </ScrollX>
      </section>
    </div>
  )
}

export default HomePage
