import React from 'react';

const CategoryCard = ({ image, text }) => {
  return (
    <div className='w-full md:w-[170px] h-[145px] border rounded-[4px] flex flex-col items-center justify-center'>
      <img src={image} alt="" className='w-[56px] h-[56px]' />
      <p className='text-center'>{text}</p>
    </div>
  );
};

export default CategoryCard;
