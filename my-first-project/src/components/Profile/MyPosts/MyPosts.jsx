import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let postData = [
        {id:'1', message:'My first post', likes : '1'},
        {id:'2', message:'How are you?', likes : '3'}
    ]

    let postElement = postData.map( p => (<Post message={p.message} likes={p.likes}/>))

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}
export default MyPosts;