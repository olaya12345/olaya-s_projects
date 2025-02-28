import React from 'react';

const ImageList = ({ image , onClick }) => {
  return (
    <>
    <div className="w-full bg-slate-200" onClick={onClick} >
      <a href={image.webformatURL} target='new'>
        <img src={image.webformatURL} alt='' className='w-full h-auto'/>
      </a>
      <p className='m text-lg'>Image by : <strong>{image.user}</strong></p>
      <p className='m-4'>Tags : <strong>{image.tags}</strong></p>
      <p className='m-4'>Resolution : <strong>{image.imageheight} X {image.imageWidth}</strong></p>
     
    </div>
    </>
  );
};

export default ImageList;
