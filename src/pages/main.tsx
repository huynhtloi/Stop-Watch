import GroupButton from '../components/GroupButton/index'
import Display from '../components/Display/index'
import { useCallback, useState, useEffect } from 'react'
import { MainContext } from '../contexts/main.context'

const Main = () => {
  const [hour, setHour] = useState<number>(0)
  const [minute, setMinute] = useState<number>(0)
  const [second, setSecond] = useState<number>(57)
  const [idInterval, setIdInterval] = useState<ReturnType<typeof setInterval> | undefined>()

  const resetAll = () => {
    setHour(0)
    setMinute(0)
    setSecond(0)
  }

  const updateHour = useCallback(() => {
    if (minute === 60) {
      setHour((h) => h + 1)
      setMinute(0)
    }
    if (hour === 24) {
      resetAll()
    }
  }, [hour, minute])

  const updateMinute = useCallback(() => {
    if (second === 60) {
      setMinute((m) => m + 1)
      setSecond(0)
    }
  }, [second])

  const updateSecond = useCallback(() => {
    setSecond((s) => s + 1)
  }, [second])

  useEffect(() => {
    setTimeout(() => updateMinute(), 10)
    updateHour()
  }, [updateHour, updateMinute])

  return (
    <MainContext.Provider
      value={{
        hour,
        minute,
        second,
        idInterval,
        updateSecond,
        setIdInterval,
        resetAll,
      }}
    >
      <div className='main-page'>
        <h1 className='title'>Stop Watch</h1>
        <Display />
        <GroupButton />
      </div>
    </MainContext.Provider>
  )
}

export default Main
