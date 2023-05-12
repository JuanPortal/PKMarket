import React from 'react'
import { Section } from './Section'


export const Catalogue = () => {
  return (
    <section className='catalogue'>
        <h2>Catalogue</h2>
        <Section type='Teams' description='Customizable team of 6 pokémon'/>
        <Section type='Event' description='Every event pokemon available'/>
        <Section type='Pokédex' description='Complete Living Dex, shiny or regular'/>
        <Section type='Move' description='Send pokemon from a PC or Phone emulator to a 3DS or a Switch'/>
    </section>
  )
}
