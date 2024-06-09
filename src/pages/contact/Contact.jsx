import React from 'react'
import './Contact.css'
import { customerSupport } from '../../assets'

const Contact = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
      <div class="container">
        <div class="picture-container">
            <div class="picture">
                <img src={customerSupport} />
            </div>
        </div>
        <div class="contact-form-container">
            <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
                <span class="form-header">Contact us</span>
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="text" name="name" class="input" placeholder="Your Name" />
                <input type="email" name="email" class="input" placeholder="Your Email" />
                <textarea name=" message" cols="30" rows="5" placeholder="Enter Your message" class="input"
                    required></textarea>
                <button class="submit" type="submit">Submit</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Contact
