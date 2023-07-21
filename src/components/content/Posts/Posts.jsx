import React, { useRef, useState } from 'react'
import Post from './post/Post'
import s from './Posts.module.css'
import { postsStore } from '../../../store'
import { v4 as uuidv4 } from 'uuid';
import MyButton from '../../UI/myButton/MyButton';
import MyTextArea from '../../UI/myTextarea/MyTextArea';
import PostForm from './postform/PostForm';
import { useEffect } from 'react';
import MyInput from '../../UI/myInput/MyInput';
import PostService from '../../../API/PostService';
import axios from 'axios';
import PostList from './PostList';
import Loader from '../../UI/loader/Loader';
import { useFetching } from '../../../hooks/useFetching';
import { getPageCount, getPagesArray } from '../../../utils/pages';
import Pagination from '../../UI/pagination/Pagination';
import { useObserver } from '../../../hooks/useObserver';

const Posts = ({/*createPost, posts, setPosts*/}) => {

    const id = uuidv4;
    
    const [searchQuery, setSearchQuery] = useState('');
    
    const [posts, setPosts] = useState([]);
    const [likesCount, setLikesCount] = useState(0)
    const [dislikesCount, setDisLikesCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10)
    const lastElement = useRef()

    const handleInputSearchPost = (event) => {
        setSearchQuery(event.target.value)
    }

    const removePost = async (id) => {
        const posts = await PostService.deletePost(id)
        // setPosts(await PostService.getAll())
        setPosts((await PostService.getAll(currentPage, limit)).data)
    }

    const addLikes = async (post) => {
        post = await PostService.addLike(post)
        setPosts((await PostService.getAll(currentPage, limit)).data)
    }

    const addDisLikes = async (post) => {
        post = await PostService.addDislike(post)
        setPosts(((await PostService.getAll(currentPage, limit)).data))
    }

    
    const [fetchPosts, isPostsLoading, postError] = useFetching( async() => {
        const response = await PostService.getAll(currentPage, limit);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    // useObserver(lastElement, currentPage < totalPages, isPostsLoading, () => {
    //     setCurrentPage(currentPage + 1);
    // })
   
    useEffect(() => {
        fetchPosts()
    }, [currentPage])

  return (
    <div>
        <MyInput 
            placeholder="search..."
            value={searchQuery}
            onChange={handleInputSearchPost}
        />
        <PostForm 
            posts={posts}
            setPosts={setPosts}
            currentPage={currentPage}
            limit={limit}
        />
        {postError && 
            <h1>Произошла ошибка {postError}</h1>
        }
        {isPostsLoading 
             ? <div className={s.loaderDiv}><Loader/></div>
             : <PostList
                posts={posts}
                searchQuery={searchQuery}
                removePost={removePost}
                addLikes={addLikes}
                addDisLikes={addDisLikes}
            
            />
        }
        {/* <div ref={lastElement} style={{height: 20, background: 'red'}}></div> */}
        <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
        />
    </div>
  )
}

export default Posts