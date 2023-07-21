import React from 'react'
import PostForm from '../content/Posts/postform/PostForm'
import { postsStore } from '../../store'
import { useState } from 'react'
import Posts from '../content/Posts/Posts'
import Post from '../content/Posts/post/Post'

const NewsContent = ({createPost, posts, setPosts}) => {

  
  

  // const createPost = (newPost)=> {
  //   console.log('sdkjfnvj')
  //   setPosts([newPost, ...posts])
  // }
  return (
    <div>
      <Posts createPost={createPost} posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default NewsContent