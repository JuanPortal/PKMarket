import React from 'react'

export const Carousel = ({album}) => {
  return (
    <div className='carousel'>
        <img src={`../images/screenshots/${album}/1.png`} alt="1" />
        <img src={`../images/screenshots/${album}/2.png`} alt="2" />
        <img src={`../images/screenshots/${album}/3.png`} alt="3" />
        <img src={`../images/screenshots/${album}/4.png`} alt="4" />
    </div>
  )
}
