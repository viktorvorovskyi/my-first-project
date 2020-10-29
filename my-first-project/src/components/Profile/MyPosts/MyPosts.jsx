import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className= {s.posts}>
      My posts
      <div>New post
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='My first post' likes="1"/>
      <Post message='How are you?' likes ="3"/>
      
    </div>

  );
}
export default MyPosts;