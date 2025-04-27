import React, { createContext, useEffect, useState } from 'react'

export const timeLeftP = createContext()


const getTimeLeft = (targetDate) => {
  const total = targetDate - new Date().getTime()
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  return { total, days, hours, minutes, seconds }
}

const CountdownProvider = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000
    const timer = setInterval(() => {
      const left = getTimeLeft(targetDate)
      if (left.total > 0) {
        setTimeLeft(left)
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <timeLeftP.Provider value={timeLeft}>
        {children}
      </timeLeftP.Provider>
    </>
  )
}

export default CountdownProvider

{/* <div className="flex justify-between items-center bg-white text- rounded-md">

<div className="flex flex-col gap-2">

  <div className="flex items-center gap-4">
    {[
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds }
    ].map((item, index) => (
      <div key={index} className="text-center">
        <div className="text-[12px] text-black mt-1">{item.label}</div>
        <div className="text-[32px] font-bold text-black px-3 py-1 rounded-md">
          {String(item.value).padStart(2, '0')}
        </div>
      </div>
    ))}
  </div>
</div>


</div> */}