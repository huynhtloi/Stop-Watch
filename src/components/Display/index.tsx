import { memo } from 'react'
import { useMainContext } from '../../contexts/main.context'
import '../../styles/display.scss'

const Display = () => {
  const { hour, minute, second } = useMainContext()
  return (
    <div className='circle'>
      <div className='display'>
        <span>{hour < 10 ? '0' + hour : hour}:</span>
        <span>{minute < 10 ? '0' + minute : minute}:</span>
        <span>{second < 10 ? '0' + second : second}</span>
      </div>
    </div>
  )
}

export default memo(Display)
