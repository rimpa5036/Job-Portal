import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Footer.css"
import Logo from "../images/footer-logo.png"
import Location from "../images/loc.svg"
import Mail from "../images/mail.svg"
import Twitter from "../images/twitter.png"
import Facebook from "../images/facebook.png"
import Gitlab from "../images/gitlab.png"
import Linkedin from "../images/linkedin.png"
import Youtube from "../images/play.png"

export default function Footer() {
  return (
    <div className='footer-wrap'>
        <div className='footer-container'>
            <div className='footer-inner'>

                <div className='w-30'>
                    <img src={Logo} alt='logo' className='footer-logo'></img>
                    <p>Everything You Need To Accelerate The Hiring Process. Remote Hiring or Local jobie.</p>
                </div>
                <div className='w-30'>
                    <div className='footer-title'>Contact</div>
                    <div className='footer-flex'>
                        <img src={Location} alt='location'></img>
                        <a href='https://www.google.com/maps/dir//405,+Rainbow+Plaza+Wakad-+Nashik+Phata+BRTS+Road+above+McDonalds+Pimple+Saudagar,+Rahatani,+Pune,+Maharashtra+411017/@18.5958728,73.7059637,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2b918d52fc913:0x7d4a29f1c1d5e713!2m2!1d73.7883654!2d18.5958907?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D'>405, Rainbow Plaza Wakad- Nashik Phata BRTS Road</a>
                    </div>
                    <div className='footer-flex'>
                        <img src={Mail} alt='mail'></img>
                        <a href="mailto:example@example.com">jobhunt@support.com</a>
                    </div>
                </div>
                <div className='w-20'>
                    <div className='footer-title'>Quick Link</div>
                    <Link to="/about" className='footer-link'>About Us</Link><br></br>
                    <Link to="/browse-jobs" className='footer-link'>Category</Link><br></br>
                    <Link to="/contact-us" className='footer-link'>Contact Us</Link>
                </div>
                <div className='w-30'>
                    <div className='footer-title'>Social Share</div>
                    <div className='footer-link-flex'>
                        <a href="https://x.com/" target="_blank" rel="noreferrer"><img src={Twitter} alt='Twitter'></img></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={Facebook} alt='Facebook'></img></a>
                        <a href="https://about.gitlab.com/" target="_blank" rel="noreferrer"><img src={Gitlab} alt='Gitlab'></img></a>
                        <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><img src={Linkedin} alt='Linkedin'></img></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={Youtube} alt='Youtube'></img></a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
