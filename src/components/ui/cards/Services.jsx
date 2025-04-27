import React from 'react'

const ServicesCard = ({ icon, text, subText }) => {
  return (
    <>
      <div id="Service" className='flex flex-col items-center p-6 gap-6'>
        <div id="iconBg" className="bg-black bg-opacity-20 rounded-full w-[70px] h-[70px] flex justify-center items-center">
          <div id="IconBgFull" className="bg-black rounded-full w-[48px] h-[48px] text-white flex justify-center items-center">
            <img src={icon} alt="" className="w-[30px] h-[30px]" />
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <p className='font-bold text-[18px] text-center'>{text}</p>
          <p className='text-[14px] text-center'>{subText}</p>
        </div>
      </div>
    </>
  )
}

export default ServicesCard
