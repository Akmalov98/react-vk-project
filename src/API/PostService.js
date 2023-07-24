import axios from "axios";

export default class PostService {
    static async getAll(page = 1, limit = 10) {
        const response = await axios.get(`http://localhost:3000/posts`, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response;
    }

    static async addPost(newPost) {
        const response = await axios.post('http://localhost:3000/posts', newPost)
        return response.data
    }

    static async deletePost(postId) {
        const response = await axios.delete(`http://localhost:3000/posts/${postId}`)
        return response.data
    }

    static async addLike(newPost) {
        const response = await axios.put(`http://localhost:3000/posts/${newPost.id}`, {...newPost, likesCount: newPost.likesCount + 1})
        return response.data
    }

    static async addDislike(newPost) {
        const response = await axios.put(`http://localhost:3000/posts/${newPost.id}`, {...newPost, dislikesCount: newPost.dislikesCount + 1})
        return response.data
    }
};

