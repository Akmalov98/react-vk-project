import React, { useState } from 'react'
import s from './Content.module.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import Posts from './Posts/Posts'
import { postsStore } from '../../store'

const Content = ({createPost, posts, setPosts}) => {

  return (
    <div className={s.content}>
        <ProfileInfo/>
        <Posts 
          // createPost={createPost}
          // posts={posts}
          // setPosts={setPosts}
        />
    </div>
  )
}

export default Content