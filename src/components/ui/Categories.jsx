import React from 'react'
import CategoryCard from './cards/CategoryCard'

const Categories = () => {
  return (
    <div className='w-fit grid grid-cols-2 items-center justify-center lg:flex  gap-6 my-16'>
        <CategoryCard  image="src/assets/pngs/Category-CellPhone.png"  text="Phones" />
        <CategoryCard image="src/assets/pngs/Category-Computer.png"  text="Computers" />
        <CategoryCard image="src/assets/pngs/Category-SmartWatch.png"  text="SmartWatch" />
        <CategoryCard image="src/assets/pngs/Category-Camera.png"  text="Camera" />
        <CategoryCard image="src/assets/pngs/Category-Headphone.png"  text="HeadPhones" />
        <CategoryCard image="src/assets/pngs/Category-Gamepad.png"  text="Gaming" />
    </div>
  )
}

export default Categories
