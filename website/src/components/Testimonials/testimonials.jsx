import React,{useRef} from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import usee_1 from '../../assets/user-1.png'
import usee_2 from '../../assets/user-2.png'
import usee_3 from '../../assets/user-3.png'
import usee_4 from '../../assets/user-4.png'
 



function testimonials() {

//transform: translateX(-50%)--> -50% ka matlab hai element ko uski apni width ka 50% left side (negative direction) mein shift karna.
const slider = useRef()
// useRef ka use slider element ko reference karne ke liye kar raha hai taaki aap slider.current se directly us element ko manipulate kar sakein, jaise ki translateX property ko set karna.
let tx =0;

let slideForward = () => {
  if (tx > -50) {
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
};

let slideBackword = () => {
  if (tx < 0) {
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
};


  return (
    <div className='testimonials container'>
      <img src={next_icon} alt="icon" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="icon" className='back-btn' onClick={slideBackword}/>

      <div className="slider">
        <ul ref={slider}>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={usee_1} alt="" />
                <div>
                  <h3>Emma Johnson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Pursuing my degree at Adjacent was one of the best decisions I have made; the supportive community, cutting-edge facilities, and dedication to academic excellence have far surpassed my expectations.</p>
             </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={usee_2} alt="" />
                <div>
                  <h3>Shantvanu Sharma</h3>
                  <span>Edusity,India</span>
                </div>
              </div>
              <p>Enrolling at Adjacent for my degree was a top decision; the encouraging environment, modern facilities, and focus on academic excellence have greatly impressed me.</p>
             </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={usee_3} alt="" />
                <div>
                  <h3>Sophia Miller</h3>
                  <span>Edusity,London</span>
                </div>
              </div>
              <p>Opting to study at Adjacent was one of my best choices; the welcoming community, advanced facilities, and strong academic focus have gone beyond what I anticipated.</p>
             </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={usee_4} alt="" />
                <div>
                  <h3>Jack Trako</h3>
                  <span>Edusity,France</span>
                </div>
              </div>
              <p>Choosing Adjacent for my degree was a decision I am proud of; the inclusive community, state-of-the-art facilities, and high academic standards have truly impressed me.</p>
             </div>
          </li>
           
         
        </ul>
      </div>
    </div>
  )
}

export default testimonials
