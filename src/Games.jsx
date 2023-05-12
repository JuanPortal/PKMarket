import React from 'react'

export const Games = ({name, title}) => {
  return (
        <img src={`../images/games/${name}.png`} alt="Game logo" title={title}/>
  )
}