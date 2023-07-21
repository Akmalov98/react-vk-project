import React from 'react'
import s from '../LeftNavigation.module.css'
import {CgProfile} from 'react-icons/cg'

const MyProfile = () => {
  return (
    <div className={s.leftNavigation}>
        <div className={s.leftNavigationIconDiv}>
            <CgProfile className={s.leftNavigationIcon}/>
        </div>
        <div className={s.myLeftNavigation}>
            MyProfile
        </div>
    </div>
  )
}

export default MyProfile