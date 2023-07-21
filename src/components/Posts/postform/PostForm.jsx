import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PostService from './../../../API/PostService';
import MyTextArea from './../../UI/myTextarea/MyTextArea';
import MyButton from './../../UI/myButton/MyButton';
import s from '../Posts.module.css';


const PostForm = ({ setPosts, currentPage, limit }) => {


    const [textareaValue, setTextAreaValue] = useState('');
    const id = uuidv4;

    const addPost = async (e) => {
        e.preventDefault()
        if (textareaValue.trim() !== '') {
            const addNewpost = {
                id: id(),
                message: textareaValue,
                likesCount: 0,
                dislikesCount: 0
            }

            const posts = await PostService.addPost(addNewpost)
            setPosts((await PostService.getAll(currentPage, limit)).data)
            setTextAreaValue('')
        }
    }

    const buttonColor = textareaValue.trim() !== '' ? 'green' : 'aqua'

    return (
        <form className={s.newPostForm}>
            <MyTextArea
                type="text"
                placeholder='введите пост...'
                value={textareaValue}
                onChange={e => setTextAreaValue(e.target.value)}
            />
            <MyButton
                onClick={addPost}
                style={{ backgroundColor: buttonColor }}
            >
                AddPost
            </MyButton>
        </form>
    )
}

export default PostForm