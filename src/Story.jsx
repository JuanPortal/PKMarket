import React from 'react'
import peopleTrading from '../images/people_trading.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEbay, faInstagram, faDiscord, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Story = () => {

  const discordButton = () => {
    navigator.clipboard.writeText('Portal#6608')
    alert('Portal#6608 copied to clipboard!')
  }

  return (
    <div className='story'>
      <div className='story-container'>
        <div className="story-image">
          <img src={peopleTrading} title="People trading pokemon in a GameBoy Color" alt="People trading pokemon in a GameBoy Color" loading="lazy" />
        </div>
        <div className='story-text'>
          <p>Never completed your Pokédex? Neither did I!</p>
          <p>
            Even though I went to the Pokémon Center and tried to enter the Trading Room,
            I didn't know what the process was or that the Link Cable even existed.
            When I finally learned how it worked as an adult, sadly my friends had already stopped playing;
            that's why now I help people complete their Pokédex in their own save files,
            aswell as providing strong competitive pokémon for their battles and shiny pokémon for all the shiny hunters out there!
          </p>
          <div className='icons'>
            <a className='icon' href="https://www.ebay.com/usr/thepkmarket" target='_blank'><FontAwesomeIcon icon={faEbay} /></a>
            <a className='icon' href="https://www.instagram.com/thepkmarket/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
            <div onClick={discordButton} className='icon'><FontAwesomeIcon icon={faDiscord} /></div>
            <a className='icon' href="https://www.facebook.com/PKMarket6IV" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
            <a className='icon' href="https://github.com/JuanPortal/PKMarket" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
