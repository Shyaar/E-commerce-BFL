import React from 'react'
import CategoryCard from './cards/CategoryCard'

const Categories = () => {

  const { data1, data2 } = useContext(ProductsData)
  const allData = data1 && data2 ? [...data1, ...data2] : []

  console.log(allData)

  function handleCategory(text) {
    const searched = allData.map(data => data.name === text)
    console.log(searched)
  }
  
  return (
    <div className='w-fit grid grid-cols-2 items-center justify-center lg:flex  gap-6 my-16'>
      <CategoryCard onClick={()=>handleCategory(text)} image="src/assets/pngs/Category-CellPhone.png" text="Phones" />
      <CategoryCard onClick={()=>handleCategory(text)} image="src/assets/pngs/Category-Computer.png" text="Computers" />
      <CategoryCard onClick={()=>handleCategory(text)} image="src/assets/pngs/Category-SmartWatch.png" text="SmartWatch" />
      <CategoryCard onClick={()=>handleCategory(text)} image="src/assets/pngs/Category-Camera.png" text="Camera" />
      <CategoryCard onClick={()=>handleCategory(text)} image="src/assets/pngs/Category-Headphone.png" text="HeadPhones" />
      <CategoryCard onClick={()=>handleCategory(text)} image="src/assets/pngs/Category-Gamepad.png" text="Gaming" />
    </div>
  )
}

export default Categories
