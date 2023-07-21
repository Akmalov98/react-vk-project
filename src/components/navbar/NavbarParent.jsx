import React from 'react'
import s from './LeftNavigation.module.css'

const NavbarParent = ({
  label,
  child
}) => {
  return (
    <div className={s.leftNavigation}>
      <div className={s.leftNavigationIconDiv}>
        {child}
      </div>
      <div className={s.myLeftNavigation}>
        {label}
      </div>
    </div>
  )
}

export default NavbarParent