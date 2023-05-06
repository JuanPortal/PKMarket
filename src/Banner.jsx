import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEbay, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Banner = () => {
  return (
    <div className='banner'>
        <div className='icons'>
          <a href="https://www.ebay.com/usr/thepkmarket" target='_blank'><FontAwesomeIcon icon={faEbay}/></a>
          <a href="https://www.instagram.com/thepkmarket/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/PKMarket6IV" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://github.com/JuanPortal/PKMarket" target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    </div>
  )
}
