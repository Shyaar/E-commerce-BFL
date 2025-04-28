import React, { useContext, useEffect } from 'react'
import { timeLeftP } from '../ui/Timer'

const TeztCD = () => {

  const countDown = useContext(timeLeftP)
  useEffect(() => {

  }, [countDown])


  return (

    <>
    {countDown.map(item =>(
      <div className="text-center">
      <div className="text-xs text-white mt-1">{item.label}</div>
        <div className="text-xl font-bold text-white px-3 py-1 rounded-md">
          {String(item.value).padStart(2, '0')}
        </div>
    </div>
    ))}
        

    </>
  )
}

export default TeztCD