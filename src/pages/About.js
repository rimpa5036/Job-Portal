import React from 'react'
import "../styles/Aboutus.css"
import "../styles/Home.css"
import { motion } from 'framer-motion';
import Title from '../components/Title'
import AboutUsCard from '../components/AboutUsCard'
import Expert from "../images/user.png";
import Professional from "../images/service.png";
import Support from "../images/headphones.png";
import Skill from "../images/mission.png";
import Recomended from "../images/diamond.png";
import Review from "../images/review.png";
import TestimonialCard from '../components/TestimonialCard';
import Client1 from "../images/candidate1.webp";
import Client2 from "../images/candidate2.jpg";
import Client3 from "../images/candidate3.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'



export default function About() {

  const testimonialSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
  };


  return (
    <div className='aboutus-container'>
        <div className='aboutus-banner'>
            <div className='aboutus-title'>About Us</div>
            <div className='aboutus-subtitle'>Our goal is to find the perfect Job for you and make connections between
            Employers and Candidates as smooth as possible</div>
        </div>

        {/* Choose us */}

        <div className='aboutbox-content'> 
            <Title text="Why Choose Us" subtext="More Than a Job—A Place to Grow."></Title>
        </div>
        <div className='chooseUs-wrapper'>
          <AboutUsCard title="Expert Technicians" para="Our skilled technicians bring years of experience and up-to-date training to every job. With a focus on quality, precision, and reliability, they ensure every task is completed efficiently and professionally." imgCard={Expert}></AboutUsCard>
          <AboutUsCard title="Professional Service" para="Whether you’re seeking strategic advice, technical expertise, or comprehensive support, we pride ourselves on our integrity, attention to detail, and ability to deliver beyond expectations." imgCard={Professional}></AboutUsCard>
          <AboutUsCard title="Great Support" para="We believe in being there when it matters most. Our team is dedicated to providing fast, friendly, and reliable support to ensure your experience with us is smooth and stress-free." imgCard={Support}></AboutUsCard>
          <AboutUsCard title="Technical Skills" para="We bring a strong foundation in cutting-edge technologies, including [insert key tools/languages/platforms], with a focus on efficiency, scalability, and innovation." imgCard={Skill}></AboutUsCard>
          <AboutUsCard title="Highly Recomended" para="Our commitment to quality, integrity, and results has earned us consistent praise from clients and partners alike. With a track record of exceeding expectations, we come highly recommended by those who value professionalism and lasting impact." imgCard={Recomended}></AboutUsCard>
          <AboutUsCard title="Positive Reviews" para="Our success is reflected in the voices of those we serve. We’re proud to have earned consistent positive reviews from clients and candidates alike, highlighting our dedication, responsiveness, and results-driven approach." imgCard={Review}></AboutUsCard>
        </div>


        {/* Upload CV */}
        <div className='uploadCv-banner'>
            <div className='uploadCv-title'>Make a Difference with Your Online Resume!</div>
            <div className='uploadCv-get-btn'>
              <Link to='/submit-resume' className='uploadCv-get'>
                <span>UPLOAD YOUR CV</span>
              </Link>
            </div>
        </div>

        {/* Customer */}

        <div className='customer-wrapper'>
            <Title text='Kind Words From Happy Customers' subtext='What other people thought about the service provided by Job Hunt'></Title>
         
              <Slider {...testimonialSettings}>

                <div className='testimonial-box'>
                  <TestimonialCard 
                  imgClient={Client1} 
                  clientname="Happy Client"
                  designation="Netflix"
                  review="This is such a great website. Uploaded my resume and got employed directly."
                  ></TestimonialCard>
                </div>
                <div className='testimonial-box'>
                  <TestimonialCard 
                  imgClient={Client2} 
                  clientname="Happy Client"
                  designation="Facebook"
                  review="Thank you so much for this great platform. I applied a job and I got hired instantly!"
                  ></TestimonialCard>
                </div>
                <div className='testimonial-box'>
                  <TestimonialCard 
                  imgClient={Client3} 
                  clientname="Happy Client"
                  designation="Netflix"
                  review="Changed my life and the support is just amazing. 🙂"
                  ></TestimonialCard>
                </div>
               
              </Slider>
            
          </div>

    </div>
  )
}
