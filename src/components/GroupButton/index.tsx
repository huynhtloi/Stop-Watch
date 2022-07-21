import { useMainContext } from '../../contexts/main.context'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import '../../styles/button.scss'

const GroupButton = () => {
  const [status, setStatus] = useState<boolean>(false)
  const { updateSecond, idInterval, setIdInterval, resetAll } = useMainContext()

  useEffect(() => {
    console.log('render group button')
  }, [updateSecond])

  const start = () => {
    setStatus(true)
    updateSecond()
    setIdInterval(
      setInterval(() => {
        updateSecond()
      }, 1000),
    )
  }

  const stop = () => {
    setStatus(false)
    clearInterval(idInterval)
  }

  const reset = () => {
    setStatus(false)
    clearInterval(idInterval)
    resetAll()
  }

  return (
    <div className='group-button'>
      {status ? (
        <Icon icon='codicon:debug-pause' className='btn btn-stop' onClick={stop} />
      ) : (
        <Icon icon='codicon:debug-start' className='btn btn-start' onClick={start} />
      )}
      <Icon icon='bx:reset' className='btn btn-reset' onClick={reset} />
    </div>
  )
}

export default GroupButton
