import React, { useState } from 'react'
import {AiFillLike} from 'react-icons/ai'
import {AiFillDislike} from 'react-icons/ai'
import s from './Post.module.css'
import MyButton from '../../../UI/myButton/MyButton'
import { postsStore } from '../../../../store'
import { useEffect } from 'react'

const Post = ({...props}) => {
    
  return (
    <div className={s.story}>
       <div className={s.storyDiv}>
           <div className={s.authorInformation}>
           <div className={s.storyImgDiv}>
           <img src="https://e7.pngegg.com/pngimages/556/742/png-clipart-avatar-youtube-8-ball-pool-user-avatar-child-face.png"
               alt='' className={s.storyImg}/>
               </div>
               <div className={s.AuthorDiv}>
                   Author
               </div>
           </div>
               {props.message}
           <div className={s.likesDislikesDiv}>
               <div className={s.likesDiv}>
                    <MyButton
                        onClick={() => props.likes(props.post)}
                    >
                       <AiFillLike className={s.likes}/>
                   </MyButton>
                   <div className={s.likesCount}>
                        {props.likesCount}
                   </div>
               </div>
               <div className={s.dislikesDiv}>
                   <MyButton className={s.dislikesButton}
                       onClick={() => props.dislikes(props.post)}
                   >
                       <AiFillDislike className={s.dislikes}/>
                   </MyButton>
                   <div className={s.dislikesCount}>
                       {props.dislikesCount}
                   </div>
               </div>
           </div>
       </div>
       <div className={s.removeButtonDiv}>
           <MyButton className={s.removeButton}
           onClick={() => props.remove(props.id)}
                
           >
               removePost
           </MyButton>
       </div>
   </div>
  )
}

export default Post