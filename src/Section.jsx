import React from 'react'
import { Carousel } from './Carousel'

export const Section = ({type, description}) => {
  return (
    <div className='catalogue-section'>
        <div className='catalogue-titles'>
            <h3>{type}</h3>
            <h4>{description}</h4>
        </div>
        <Carousel album={type}/>
    </div>
  )
}
