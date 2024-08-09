import React from 'react'
import './programs.css'
import pgm_1 from '../../assets/program-1.png'
import pgm_2 from '../../assets/program-2.png'
import pgm_3 from '../../assets/program-3.png'
import pgm_icon_1 from '../../assets/program-icon-1.png'
import pgm_icon_2 from '../../assets/program-icon-2.png'
import pgm_icon_3 from '../../assets/program-icon-3.png'
 
function Programs(){
    return (

        <div className='programs container'>

            <div className="program">
                 <img src={pgm_1} alt="prgm" />
            <div className="caption">
                <img src={pgm_icon_1} alt="icon" />
                <p>Graduation Degree</p>
            
            </div>
            </div>

            <div className="program"> <img src={pgm_2} alt="prgm" />
            <div className="caption">
                <img src={pgm_icon_2} alt="icon" />
                <p>Masters Degree</p>
            
            </div>
            </div>

            <div className="program"><img src={pgm_3} alt="prgm" />
            <div className="caption">
                <img src={pgm_icon_3} alt="icon" />
                <p>Post Graduation </p>
            
            </div>
            </div>

        </div>
    )
}

export default Programs