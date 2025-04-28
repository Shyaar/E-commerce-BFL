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
  
  const countDown = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]

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
      <timeLeftP.Provider value={countDown}>
        {children}
      </timeLeftP.Provider>
    </>
  )
}

export default CountdownProvider


