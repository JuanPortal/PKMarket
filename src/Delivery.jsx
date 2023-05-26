import React from 'react'

export const Delivery = () => {
  return (
    <section className='delivery'>
        <h3>How will I receive my pokémon?</h3>
        <div className="consoles">
            <div className="console">
                <img src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/3DS.webp?alt=media&token=b64a70a2-611e-4f93-aa17-86c42b36eb5f" title="Nintendo 3DS" alt="Nintendo 3DS" loading="lazy"/>
                <div className="instructions">
                    <p>1. Add 2380 9651 1346 to your friends list</p>
                    <p>2. Send me your friend code</p>
                    <p>3. Once we're in the trade, send me any random pokémon and I'll send you yours</p>
                </div>
            </div>
            <div className="console">
                <img src="https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/Switch.webp?alt=media&token=930e5c7c-63ac-4c46-96b5-6aa85de6d9bc" title="Nintendo Switch" alt="Nintendo Switch" loading="lazy"/>
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
