import React from 'react'
import {FiUsers} from 'react-icons/fi'
import s from '../LeftNavigation.module.css'

const Friends = () => {
  return (
<div className={s.leftNavigation}>
     <div className={s.leftNavigationIconDiv}>
       <FiUsers className={s.leftNavigationIcon}/>
     </div>
     <div className={s.myLeftNavigation}>
         Friends
     </div>
   </div>
  )
}

export default Friends