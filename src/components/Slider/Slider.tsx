import React, { ReactElement, useRef } from 'react'
import styles from './styles.module.css'

interface Props {
  children: ReactElement
  step?: number
}

const Slider = ({ children, step = 250 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null)

  const scrollLeft = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft -= step
  }
  const scrollRight = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollLeft += step
  }
  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow} type="button">
        {'<'}
      </button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow} type="button">
        {'>'}
      </button>
    </div>
  )
}

export default Slider
