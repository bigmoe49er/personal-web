import React from 'react';

function HomepageImage() {
  const url = 'https://i.redd.it/eb52bl6e8jgz.jpg';
  return (
    <img src={url} style={{width: 650}} alt='Image of Golden Gate Bridge' />
  );
}

export default HomepageImage;