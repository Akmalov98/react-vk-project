import React from 'react'
import {BsCameraVideo} from 'react-icons/bs'
import s from '../LeftNavigation.module.css'
const Videos = () => {
  return (
    <div className={s.leftNavigation}>
    <div className={s.leftNavigationIconDiv}>
        <BsCameraVideo className={s.leftNavigationIcon}/>
    </div>
    <div className={s.myLeftNavigation}>
        Videos
    </div>
</div>
  )
}

export default Videos