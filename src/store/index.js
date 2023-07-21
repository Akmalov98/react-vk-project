

export const dialogStore = {
    dialogs: [
        {id: 0, name: 'Dimitry', 
        messages: 
            [
                {id: 0, message: 'Hi how are you' },
                {id: 1, message: 'Hi how are you' },
                {id: 2, message: 'Hi how are you' },
                {id: 3, message: 'Hi how are you' },
                {id: 4, message: 'Hi how are you' },
                {id: 5, message: 'Hi how are you' },
            ]},
        {id: 1, name: 'Karl', messages: 
            [
                {id: 0, message: 'Hi how are you' },
                {id: 1, message: 'Hi how are you' },
                {id: 2, message: 'Hi how are you' },
                {id: 3, message: 'Hi how are you' },
                {id: 4, message: 'Hi how are you' },
                {id: 5, message: 'Hi how are you' },
            ]},
        {id: 2, name: 'Andrey', messages: 
            [{id: 0, message: 'Hi how are you' }]},
        {id: 3, name: 'Ruslan', messages: 
            [{id: 0, message: 'Hi how are you' }]},
        {id: 4, name: 'Gimmy', messages: 
            [{id: 0, message: 'Hi how are you' }]}
    ]
}

export const postsStore = {
    posts: [
        {id: '1',message: 'Hi how are you',likesCount:   0,dislikesCount: 0},
        {id: '2',message: 'its my first post',likesCount:0,dislikesCount: 0},
        {id: '3',message: 'its my first post',likesCount:0,dislikesCount: 0},
        {id: '4',message: 'its my first post',likesCount:0,dislikesCount: 0}
    ],

    getPosts() {
        return this.posts
    },

    setLikes(postId) {
        
    }
}

export const audioStore = [
    {title: "MartinGarrix"}
]

