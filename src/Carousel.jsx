import React from 'react'

export const Carousel = ({album}) => {
  let imagesURLs = []

  switch (album) {
    case 'Team':
      imagesURLs = ['http://imgfz.com/i/D2zSC3E.png', 'http://imgfz.com/i/Y4ctzsb.png', 'http://imgfz.com/i/odZzKuh.png', 'http://imgfz.com/i/gNkT2ox.png']
      break
    case 'Event':
      imagesURLs = ['http://imgfz.com/i/CtoqOiG.jpg', 'http://imgfz.com/i/I9DPU4X.png', 'http://imgfz.com/i/Qs9EutH.png', 'http://imgfz.com/i/ztoRUi5.jpg']
      break
    case 'Pokédex':
      imagesURLs = ['http://imgfz.com/i/U2OGdgv.png', 'http://imgfz.com/i/F7VPGTW.png', 'http://imgfz.com/i/OFYIjob.png', 'http://imgfz.com/i/NXxzikE.png']
      break
    case 'Extra':
      imagesURLs = ['http://imgfz.com/i/lHOFKpN.png', 'http://imgfz.com/i/GA7kUDw.png', 'http://imgfz.com/i/1wmxBTG.png', 'http://imgfz.com/i/vP26GVz.png']
      break
  }

  return (
    <div className='carousel'>
        <img src={imagesURLs[0]} alt="1st image" />
        <img src={imagesURLs[1]} alt="2nd image" />
        <img src={imagesURLs[2]} alt="3rd image" />
        <img src={imagesURLs[3]} alt="4th image" />
    </div>
  )
}
