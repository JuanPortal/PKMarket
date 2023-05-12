import React from 'react'
import { Section } from './Section'


export const Catalogue = () => {
  return (
    <section className='catalogue'>
        <h2>Catalogue</h2>
        <Section type='Team' description='Customizable team of 6 pokémon, you can choose any pokémon in the game'/>
        <Section type='Event' description='We have every event distribution pokémon from all gens'/>
        <Section type='Pokédex' description='Complete Living Dex, shiny or regular (Sent via HOME)'/>
        <Section type='Extra' description='Shiny eggs || Foreign Ditto for Masuda Method || Send pokemon from a PC/Phone emulator to a 3DS/Switch'/>
    </section>
  )
}
