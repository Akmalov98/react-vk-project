import React from 'react'
import s from '../LeftNavigation.module.css'
import {TbMessageCircle2} from 'react-icons/tb'

const Messenger = () => {
  return (
    <div className={s.leftNavigation}>
        <div className={s.leftNavigationIconDiv}>
            <TbMessageCircle2 className={s.leftNavigationIcon}/>
        </div>
        <div className={s.myLeftNavigation}>
           Messenger
        </div>
    </div>
  )
}

export default Messenger