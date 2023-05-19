import React from 'react'

export const Games = ({title, src}) => {
  return (
        <img src={src} alt="Game logo" title={title}/>
  )
}