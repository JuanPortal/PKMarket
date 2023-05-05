import React from 'react'

export const Story = () => {
  return (
    <div className='story'>
        <div className='story-container'>
            <div className='story-image'>
                <img src="../images/people_trading.png" alt="People trading pokemon in a GameBoy Color" />
            </div>
            <div className='story-text'>
                <p>Never completed your Pokédex? Neither did I!</p>
                <p>
                    Even though I went to the Pokémon Center and tried to enter the Trading Room, 
                    I didn't know what the process was or that the Link Cable even existed. 
                    When I finally learned how it worked as an adult, sadly my friends had already stopped playing. 
                    That's why now I help people complete their Pokédex in their own save files, 
                    as well as providing strong competitive Pokémon for their battles and shiny pokémon for all the shiny hunters out there!
                </p>
            </div>
        </div>
    </div>
  )
}
