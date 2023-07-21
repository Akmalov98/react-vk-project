import React from 'react'
import s from '../LeftNavigation.module.css'
import {HiOutlinePhotograph} from 'react-icons/hi'

const Photos = () => {
  return (
        <div className={s.leftNavigation}>
            <div className={s.leftNavigationIconDiv}>
                <HiOutlinePhotograph className={s.leftNavigationIcon}/>
            </div>
            <div className={s.myLeftNavigation}>
                Photos
            </div>
        </div>
  )
}

export default Photos