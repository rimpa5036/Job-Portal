import React, { useState } from 'react'
import "../styles/ContactUs.css"
import Loc from "../images/home1.svg";
import Call from "../images/telephone1.svg";
import Mail from "../images/mail1.svg";

export default function ContactUs() {

  const [error, setError] = useState({});

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''

  });

  const handleChange = (e)=>{

    const{name,value} = e.target;
    setContactData({
      ...contactData,
      [name]:value
    })
  }

  const handleReset = ()=>{
    setContactData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    const newError = validateForm(contactData);
    setError(newError);

    if (Object.keys(newError).length === 0) {
        // Form submission logic here
        console.log('Form submitted successfully!');
        console.log("Form Data is: ", contactData);
        handleReset();

    } else {
        console.log('Form submission failed due to validation errors.');
    }
  }

  const validateForm = (data) => {
    const error = {};
  
    if (!data.name.trim()) {
      error.name = "Name is required";
    }
    if (!data.email.trim()) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      error.email = "Email is invalid";
    }
    if (!data.subject.trim()) {
      error.subject = "Subject is required";
    }
    if (!data.message.trim()) {
      error.message = "Message is required";
    }
  
    return error;
  }


  return (

      <div style={{paddingTop: "10px"}}>
        <div className='contactUs-container'>
          <div className='conatctUs-title'>Contact Us</div>
        </div>

        {/* Form */}
        <form className='contactUs-formWrap' onSubmit={handleSubmit}>
          <div>
            <div className='contactUs-title'>Get in Touch</div>
            <div className='contactUs-flex'>
                <input type='text' name='name' value={contactData.name} onChange={handleChange} placeholder="Enter your name" className='contactUs-input'></input>
                <input type='text' name='email' value={contactData.email} onChange={handleChange} placeholder="Email" className='contactUs-input'></input>
            </div>
            <input type='text' name='subject' value={contactData.subject} onChange={handleChange} placeholder='Enter Subject' className='contactUs-subject'></input>
            <textarea name='message'  rows={9} value={contactData.message} onChange={handleChange} placeholder='Enter Message'></textarea>
            <button type="submit"><span>Send</span></button>
          </div>

          <div style={{marginTop: "50px"}}>
            <div className='contactUs-info-wrapper'>
                <img src={Loc}></img>
                <div>
                  <a href="https://www.google.com/maps/dir//405,+Rainbow+Plaza+Wakad-+Nashik+Phata+BRTS+Road+above+McDonalds+Pimple+Saudagar,+Rahatani,+Pune,+Maharashtra+411017/@18.5958728,73.7059637,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2b918d52fc913:0x7d4a29f1c1d5e713!2m2!1d73.7883654!2d18.5958907?entry=ttu&amp;g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D">405, Rainbow Plaza Wakad</a>
                  <p>Pune, Maharashtra 411017</p>
                </div>
            </div>
            <div className='contactUs-info-wrapper'>
                <img src={Call}></img>
                <div>
                  <div>+ 1 (800) 555-5555</div>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
            </div>
            <div className='contactUs-info-wrapper'>
                <img src={Mail}></img>
                <div>
                  <a href="mailto:example@example.com">jobhunt@support.com</a>
                  <p>Send us your query anytime!</p>
                </div>
            </div>
          </div>
        </form>

        {/* Google Map */}
        <div className='contactUs-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5150271431517!2d73.7883654!3d18.5958907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b918d52fc913%3A0x7d4a29f1c1d5e713!2s3RI%20Technologies!5e0!3m2!1sen!2sin!4v1747158698252!5m2!1sen!2sin" width="1520" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
        </div>
    
      </div>

  )
}


