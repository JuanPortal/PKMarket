import React from 'react'
import console1 from '../images/3DS.png'
import console2 from '../images/Switch.png'

export const Delivery = () => {
  return (
    <section className='delivery'>
        <h3>How will I receive my pokémon?</h3>
        <div className="consoles">
            <div className="console">
                <img src={console1} alt="" loading="lazy"/>
                <div className="instructions">
                    <p>1. Add 2380 9651 1346 to your friends list</p>
                    <p>2. Send me your friend code</p>
                    <p>3. Once we're in the trade, send me any random pokémon and I'll send you yours</p>
                </div>
            </div>
            <div className="console">
                <img src={console2} alt="" loading="lazy"/>
                <div className="instructions">
                    <p>1. Nintendo Switch Online needed</p>
                    <p>2. Enter the Link Trade code I'll send you</p>
                    <p>3. Once we're in the trade, send me any random pokémon and I'll send you yours</p>
                </div>
            </div>
        </div>
    </section>
  )
}
