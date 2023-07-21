import React from 'react'
import s from '../LeftNavigation.module.css'
import {BsMusicPlayer} from 'react-icons/bs'

const Musics = () => {
  return (
    <div className={s.leftNavigation}>
        <div className={s.leftNavigationIconDiv}>
            <BsMusicPlayer className={s.leftNavigationIcon}/>
        </div>
        <div className={s.myLeftNavigation}>
            Musics
        </div>
    </div>
  )
}

export default Musics