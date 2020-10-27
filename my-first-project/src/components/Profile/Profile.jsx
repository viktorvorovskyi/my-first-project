import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
const Profile = () => {
  return (
    <div>
      <div className={s.content}>
        <div className={s.mainImage}>
          <img src='https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg' />
        </div>
        <div className={s.avatar}>
          <img src='https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg' />
        </div>
        <div className={s.description}>
          <div className={s.item}>Viktor Vorovskyi</div>
          <div className={s.item}>Male</div>
          <div className={s.item}>22 years old</div>
          <div className={s.item}>Kyiv</div>
        </div>

        <MyPosts />
      </div>
    </div>
  );
}
export default Profile;