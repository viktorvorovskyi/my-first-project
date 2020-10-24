import React from 'react';

const Profile = () => {
  return (
    <div>
      <div className='content'>
        <div className='mainImage'>
          <img src='https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg' />
        </div>
        <div className='avatar'>
          <img src='https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg' />
        </div>
        <div className='description'>
          <div>Viktor Vorovskyi</div>
          <div>Male</div>
          <div>22 years old</div>
          <div>Kyiv</div>
        </div>
      </div>
      <div className='posts'>
        My posts
      </div>
    </div>

  );
}
export default Profile;