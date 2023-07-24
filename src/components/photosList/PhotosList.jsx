import React from 'react'
import s from './PhotosList.module.css'

const PhotosList = () => {

  const photos = [
    {id: 1, link: '', placeholder: '', alt: ''}
  ]
  return (
    <div className={s.photosList}>
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFmxQGpXrz151TjCmeJdRxpOrAs2tbL2Whw&usqp=CAUQ'
        className={s.img} placeholder='' alt=''
      />
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
      <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CG-vsZz6wIjb7XMZHG5MnKRG4yWPSnG02Q&usqp=CAU"
        placeholder='' alt='' />
    </div>
  )
}

export default PhotosList