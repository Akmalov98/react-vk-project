import React from 'react'
import s from './MyTextArea.module.css';

const MyTextArea = ({ ...props }) => {
  return (
    <textarea className={s.textArea} {...props} />
  )
}

export default MyTextArea