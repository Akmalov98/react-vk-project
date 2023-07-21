/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from 'react';
import PostService from './../../API/PostService';
import { useFetching } from './../../hooks/useFetching';
import { getPageCount } from './../../utils/pages';
import MyInput from './../UI/myInput/MyInput';
import PostForm from './postform/PostForm';
import PostList from './PostList';
import Loader from './../UI/loader/Loader';
import Pagination from './../UI/pagination/Pagination';
import { v4 as uuidv4 } from 'uuid';
import s from './Posts.module.css';

const Posts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [posts, setPosts] = useState([]);
    const [likesCount, setLikesCount] = useState(0)
    const [dislikesCount, setDisLikesCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const lastElement = useRef();
    const id = uuidv4;

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


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(currentPage, limit);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [currentPage])

    return (
        <div className={s.posts_content}>
            <MyInput
                className={s.post_search}
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
                ? <div className={s.loaderDiv}><Loader /></div>
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