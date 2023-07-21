import React from 'react'
import Post from './post/Post'
import { useState } from 'react';

const PostList = ({
    posts,
    searchQuery, 
    removePost,
    addLikes,
    addDisLikes

}) => {

    const filteredPosts = posts.filter((post) => 
    post.message.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
        {filteredPosts.map(post => 
        <Post
            key={post.id}
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
            dislikesCount={post.dislikesCount} 
            remove={removePost}
            likes={addLikes}
            dislikes={addDisLikes}
            post={post}
        />
        )}
    </div>
  )
}

export default PostList