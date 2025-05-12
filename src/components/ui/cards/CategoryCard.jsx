import React from 'react';

const CategoryCard = ({ image, text }) => {

  function handleSearch(){
    
  }

  return (
    <div className='w-full hover:w-120% md:w-[170px] md:hover:w-[190px] h-[145px] md:hover:h-[190px] hover:shadow-md hover:bg-black/5 border rounded-[4px] flex flex-col items-center justify-center'>
      <img src={image} alt="" className='w-[56px] h-[56px]' />
      <p className='text-center'>{text}</p>
    </div>
  );
};

export default CategoryCard;
