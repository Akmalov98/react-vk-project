import React from 'react'
import s from ''

const VideosItem = () => {
  return (
    <div className={s.list}>
      <div className={s.listVideo}>
        <video className={s.listVideo} src='/videoTexts.mp4' />
      </div>
      <div className={s.listdescriptionVideo}>
        ksdjv
      </div>
    </div>
  )
}

export default VideosItem