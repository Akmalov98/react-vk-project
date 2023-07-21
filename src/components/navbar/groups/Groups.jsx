import React from 'react'
import s from '../LeftNavigation.module.css'
import {HiOutlineUserGroup} from 'react-icons/hi'

const Groups = () => {
  return (
    <div className={s.leftNavigation}>
        <div className={s.leftNavigationIconDiv}>
            <HiOutlineUserGroup className={s.leftNavigationIcon}/>
        </div>
        <div className={s.myLeftNavigation}>
             Groups
        </div>
    </div>
  )
}

export default Groups