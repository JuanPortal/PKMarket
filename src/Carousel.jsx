import React from 'react'

export const Carousel = ({album}) => {
  let imagesURLs = []

  switch (album) {
    case 'Team':
      imagesURLs = ['https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FTeam%2F1.webp?alt=media&token=2644dddb-2641-426c-a281-29de54834b49', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FTeam%2F2.webp?alt=media&token=8f300a2e-93e6-4b57-8fca-b4d0b526ae18', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FTeam%2F3.webp?alt=media&token=a5defb16-52be-4bb3-ac69-901297cbd97c', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FTeam%2F4.webp?alt=media&token=dffba287-e9b7-4f9b-9b7d-e6dc8e30d916']
      break
    case 'Event':
      imagesURLs = ['https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FEvent%2F1.webp?alt=media&token=39e224ac-f5c8-4873-b40e-6f9065d26486', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FEvent%2F2.webp?alt=media&token=81e26420-831a-4ae8-bab9-0a6264cbd38d', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FEvent%2F3.webp?alt=media&token=e53e22ee-14ae-4849-90cc-15212b2e15bb', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FEvent%2F4.webp?alt=media&token=08b27a6e-fc6a-42f4-994a-5fa26d88e1f0']
      break
    case 'Pokédex':
      imagesURLs = ['https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FPok%C3%A9dex%2F1.webp?alt=media&token=1b48004f-c43a-43d8-9eab-d810db240f31', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FPok%C3%A9dex%2F2.webp?alt=media&token=5f525b09-3363-41e3-a257-8f176fd313a9', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FPok%C3%A9dex%2F3.webp?alt=media&token=c048eaee-4d82-4f05-bb65-9404ccbd1b67', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FPok%C3%A9dex%2F4.webp?alt=media&token=bbb7e0ce-b56a-4ee1-ab50-68b8b204fdb8']
      break
    case 'Extra':
      imagesURLs = ['https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FExtra%2F1.webp?alt=media&token=2e9acf0f-b084-42a1-ac7b-b0ed2e9d1580', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FExtra%2F2.webp?alt=media&token=4c1a950e-4e42-4be4-8254-7a47420c335c', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FExtra%2F3.webp?alt=media&token=db1d65ea-1b0e-452b-94de-102df6304172', 'https://firebasestorage.googleapis.com/v0/b/pkmarket-e4dd6.appspot.com/o/screenshots%2FExtra%2F4.webp?alt=media&token=2009d845-e0f0-4d4a-82bb-a0a0dace2da3']
      break
  }

  return (
    <div className='carousel'>
        <img src={imagesURLs[0]} alt="1st image" loading="lazy"/>
        <img src={imagesURLs[1]} alt="2nd image" loading="lazy"/>
        <img src={imagesURLs[2]} alt="3rd image" loading="lazy"/>
        <img src={imagesURLs[3]} alt="4th image" loading="lazy"/>
    </div>
  )
}
