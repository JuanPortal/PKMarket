import React from 'react'
import { Section } from './Section'
import { Games } from './Games'

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
            <Games title='Pokémon X & Pokémon Y' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FXY.webp?alt=media&token=f789291f-d494-4e72-b23d-a91c6555ddc9" />
            <Games title='Pokémon Omega Ruby & Pokémon Alpha Sapphire' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FORAS.webp?alt=media&token=150d69af-bbb3-43ea-960d-cf7be5a4b97e" />
            <Games title='Pokémon Sun & Pokémon Moon' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FSM.webp?alt=media&token=2304422c-a582-4e64-a819-c04e099ff2ab" />
            <Games title='Pokémon Ultra Sun & Pokémon Ultra Moon' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FUSUM.webp?alt=media&token=82585870-21ab-43dc-af56-2ec03f81575d" />
            <Games title="Pokémon Let's Go, Pikachu! & Pokémon Let's Go, Eevee!" src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FLGPE.webp?alt=media&token=89dc50c9-ba7b-48aa-b1e8-b26387cce69f" />
            <Games title='Pokémon Sword & Pokémon Shield' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FSWSH.webp?alt=media&token=4faf5054-8f81-4748-a625-9fd520376e2c" />
            <Games title='Pokémon Brilliant Diamond & Pokémon Shining Pearl' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FBDSP.webp?alt=media&token=7d621edc-e99a-40ae-ab3a-5dce9ff920ff" />
            <Games title='Pokémon Legends Arceus' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FPLA.webp?alt=media&token=39046a30-abef-4737-aa7b-48a0478f07a8" />
            <Games title='Pokémon Scarlet & Pokémon Violet' src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/games%2FSV.webp?alt=media&token=24176ad5-2bf5-41a9-9075-7dd207a5374e" />
          </div>
        </div>
    </section>
  )
}
