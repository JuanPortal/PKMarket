import React from 'react'
import { Section } from './Section'
import { Games } from './Games'

export const Catalogue = () => {
  return (
    <section className='catalogue'>
        <h2>Catalogue</h2>
        <Section type='Team' description='Customizable team of 6 pokémon, you can choose any pokémon in the game'/>
        <Section type='Event' description='We have every event distribution pokémon from all gens'/>
        <Section type='Pokédex' description='Complete Living Dex, shiny or regular (Sent via HOME)'/>
        <Section type='Extra' description='Shiny eggs || Foreign Ditto for Masuda Method || Send pokemon from a PC/Phone emulator to a 3DS/Switch'/>
        <div className='availability'>
            <p>Available for all these games:</p>
            <div className="games-container">
            <Games name='XY' title='Pokémon X & Pokémon Y'/>
            <Games name='ORAS' title='Pokémon Omega Ruby & Pokémon Alpha Sapphire'/>
            <Games name='SM' title='Pokémon Sun & Pokémon Moon'/>
            <Games name='USUM' title='Pokémon Ultra Sun & Pokémon Ultra Moon'/>
            <Games name='LGPE' title="Pokémon Let's Go, Pikachu! & Pokémon Let's Go, Eevee!"/>
            <Games name='SWSH' title='Pokémon Sword & Pokémon Shield'/>
            <Games name='BDSP' title='Pokémon Brilliant Diamond & Pokémon Shining Pearl'/>
            <Games name='PLA' title='Pokémon Legends Arceus'/>
            <Games name='SV' title='Pokémon Scarlet & Pokémon Violet'/>
            </div>
        </div>
    </section>
  )
}
