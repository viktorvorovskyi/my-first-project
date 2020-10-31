import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.mainImage}>
                <img src='https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'/>
            </div>

            <div className={s.description}>
                ava+description
            </div>
        </div>


    )
}
export default ProfileInfo;
