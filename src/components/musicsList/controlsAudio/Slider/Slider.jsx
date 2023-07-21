import React from 'react'
import s from './Slider.module.css'
import { useRef } from 'react'

const Slider = ({ref, checkWidth}) => {

    const clickRef = useRef()

  return (
    <div className={s.navigation}>
        <div className={s.navigation_wrapper}>
            <div className={s.seek_bar} onClick={checkWidth} style={{width: '50%'}} ref={clickRef}></div>
        </div>
    </div>
  )
}

export default Slider