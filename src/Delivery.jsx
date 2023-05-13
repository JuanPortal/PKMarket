import React from 'react'

export const Delivery = () => {
  return (
    <div className='delivery'>
        <h3>How will I receive my pokémon?</h3>
        <div className="consoles">
            <div className="console">
                <img src="../images/3DS.png" alt="" />
                <div className="instructions">
                    <p>1. Add 2380 9651 1346 to your friends list</p>
                    <p>2. Send me your friend code</p>
                    <p>3. Once we're in the trade, send me any random pokémon and I'll send you yours</p>
                </div>
            </div>
            <div className="console">
                <img src="../images/Switch.png" alt="" />
                <div className="instructions">
                    <p>1. Nintendo Switch Online needed</p>
                    <p>2. Enter the Link Trade code I'll send you</p>
                    <p>3. Once we're in the trade, send me any random pokémon and I'll send you yours</p>
                </div>
            </div>
        </div>
    </div>
  )
}
