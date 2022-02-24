import React from 'react';

const GifGridItem = ({title,url}) => {
   
  return (
    <div className='card animate__animated animate__bounce'>
        <img className='img-card' src={url} alt={title}/>
        <p className='subtitle-img'>{title}</p>
    </div>
  )
};

export default GifGridItem;


