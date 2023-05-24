import React from 'react'
import { Section } from './Section'
import { Games } from './Games'
import game1 from '../images/games/XY.png'
import game2 from '../images/games/ORAS.png'
import game3 from '../images/games/SM.png'
import game4 from '../images/games/USUM.png'
import game5 from '../images/games/LGPE.png'
import game6 from '../images/games/SWSH.png'
import game7 from '../images/games/BDSP.png'
import game8 from '../images/games/PLA.png'
import game9 from '../images/games/SV.png'

export const Catalogue = () => {
  return (
    <section className='catalogue'>
        <h2>Catalogue</h2>
        <Section type='Team' description='Customizable team of 6 pokémon, you can choose any pokémon in the game' />
        <Section type='Event' description='We have every event distribution pokémon from all gens' />
        <Section type='Pokédex' description='Complete Living Dex, shiny or regular (Sent via HOME)' />
        <Section type='Extra' description='Shiny eggs || Foreign Ditto for Masuda Method || Send pokemon from a PC/Phone emulator to a 3DS/Switch' />
        <div className='availability'>
          <p>Available for all these games:</p>
          <div className="games-container">
            <Games title='Pokémon X & Pokémon Y' src={game1} />
            <Games title='Pokémon Omega Ruby & Pokémon Alpha Sapphire' src={game2} />
            <Games title='Pokémon Sun & Pokémon Moon' src={game3} />
            <Games title='Pokémon Ultra Sun & Pokémon Ultra Moon' src={game4} />
            <Games title="Pokémon Let's Go, Pikachu! & Pokémon Let's Go, Eevee!" src={game5} />
            <Games title='Pokémon Sword & Pokémon Shield' src={game6} />
            <Games title='Pokémon Brilliant Diamond & Pokémon Shining Pearl' src={game7} />
            <Games title='Pokémon Legends Arceus' src={game8} />
            <Games title='Pokémon Scarlet & Pokémon Violet' src={game9} />
          </div>
        </div>
    </section>
  )
}
