import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ image, text, onClick  }) => {

const navigate = useNavigate()

  return (
    <div onClick={onClick} className='w-full hover:w-120% md:w-[170px] md:hover:w-[190px] h-[145px] md:hover:h-[190px] hover:shadow-md hover:bg-black/5 border rounded-[4px] flex flex-col items-center justify-center'>
      <img src={image} alt="" className='w-[56px] h-[56px]' />
      <p className='text-center'>{text}</p>
    </div>
  );
};

export default CategoryCard;
