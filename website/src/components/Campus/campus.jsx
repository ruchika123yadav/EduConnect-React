import React, { useState } from 'react'
import './campus.css'
import gal_1 from '../../assets/gallery-1.png'
import gal_2 from '../../assets/gallery-2.png'
import gal_3 from '../../assets/gallery-3.png'
import gal_4 from '../../assets/gallery-4.png'
import arrow from '../../assets/white-arrow.png'

function Campus() {
  const [index,SetIndex] = useState(0);
  return (
    <div className='campus'>
        <div className="gallery">
      <img src={gal_1} alt="gallery" />
      <img src={gal_2} alt="gallery" />
      <img src={gal_3} alt="gallery" />
      <img src={gal_4} alt="gallery" />
       </div>

{/* alg class di fir bhi wo .btn.dark-btn se apply hua */}
       <button className="btn dark-btn">See more here <img src={arrow} alt="arrow" /></button>
    </div>
  )
}

export default Campus
