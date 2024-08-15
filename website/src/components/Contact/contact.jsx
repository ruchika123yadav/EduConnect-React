import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {
  return (
     <div className='contact container'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="icon" /></h3>
            <p>
            We had love to hear from you! Whether you have feedback, questions, or suggestions, please do not hesitate to reach out through our contact form or the information provided below.
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" /> Contact-ruchikayadav.tech@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> 9027xxxxxx</li>
                <li> <img src={location_icon} alt="" /> 26, Chaitham Lines, New Rest House Railway Colony </li>
                {/* , Prayagraj, Uttar Pradesh 211002 */}
            </ul>
        </div>
     <form action="">
<label htmlFor="name"> Your Name</label>
<input type="text" name='name' placeholder='Enter your name' required />
<label htmlFor="phone">Phone Number</label>
<input type="tel" placeholder='Enter you mobile number' name='phone' />
<label htmlFor="mess"> Write your messages here</label>
<textarea name="mess" id="" rows={6} placeholder='Enter your message' required ></textarea>
<button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /> </button>
      </form>

      <span>Sending</span>
    </div> 
    
   )
}

export default Contact
