import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "../styles/Home.css"
import SearchIcon from "../images/search.svg";
import Title from '../components/Title';
import Cards from '../components/Cards';
import DesignIcon from '../images/pen.png';
import Engineer from '../images/terminal.png';
import Health from '../images/hospital.png';
import Management from '../images/checklist.png';
import Sales from '../images/dollar-sign.png';
import Bank from '../images/bank.png';
import Chart from '../images/column-chart.png';
import Content from '../images/writing.png';
import JobCard from '../components/JobCard';
import Card1 from "../images/img-1.png";
import Card2 from "../images/img-2.png";
import Card3 from "../images/img-3.png";
import { Link } from 'react-router-dom';
import Image1 from "../images/1image.png";
import Image2 from "../images/2image.png";
import Image3 from "../images/3image.png";
import Image4 from "../images/4image.png";
import TestimonialCard from '../components/TestimonialCard';
import Client1 from "../images/candidate1.webp";
import Client2 from "../images/candidate2.jpg";
import Client3 from "../images/candidate3.jpg";

export default function Home() {

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    pauseOnHover: false,
    infinite: true,
  };

  const testimonialSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    infinite: true,
    speed: 500,
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <div className='homepage-container'>

        {/* Banner */}
          <div className='homepage-banner'>
            <div className='homepage-title'>Your Dream Job is Waiting!</div>
            <div className='homepage-subtitle'>We have more than 1400+ great job offers you deserve.</div>
            <div className='homepage-searchcontent'>
                <input type='text' placeholder='Job title, keywords or company name' className='homepage-searchfield'></input>
                <Link to='/browse-jobs'>
                  <div className='search-btn'>
                    <img src={SearchIcon} alt='search'></img>
                  </div>
                </Link> 
            </div>
          </div>


          {/* Find Job */}
          <div className='findJob-content'>
            <Title text="3 Steps To Finding Your Dream Jobs"></Title>
            <div className='findJob-flex'>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <JobCard no="01." title="Search a job" imgIcon={Card1}></JobCard>
              </motion.div>
              <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <JobCard no="02." title="Apply for job" imgIcon={Card2}></JobCard>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                  <JobCard no="03." title="Get your job" imgIcon={Card3}></JobCard>
                </motion.div>
            </div>
            <div className='findJob-get-btn'>
              <Link to='/browse-jobs' className='findJob-get'>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="style=linear">
                <g id="profile">
                <path id="vector" d="M12 11C14.4853 11 16.5 8.98528 16.5 6.5C16.5 4.01472 14.4853 2 12 2C9.51472 2 7.5 4.01472 7.5 6.5C7.5 8.98528 9.51472 11 12 11Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="rec" d="M5 18.5714C5 16.0467 7.0467 14 9.57143 14H14.4286C16.9533 14 19 16.0467 19 18.5714C19 20.465 17.465 22 15.5714 22H8.42857C6.53502 22 5 20.465 5 18.5714Z" stroke="#ffffff" stroke-width="1.5"/>
                </g>
                </g>
                </svg>
                <span>Get Started Now</span>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className='category-bg'>
            <div className='box-content'>
                <Title text="Popular Categories" subtext="37 jobs live - 10 added today."></Title>
                <div className='card-wrapper'>
                  {[  
                    { category: "Design & Art", position: "4 open positions", imgSrc: DesignIcon },
                    { category: "IT Engineer", position: "3 open positions", imgSrc: Engineer },
                    { category: "Health Care", position: "2 open positions", imgSrc: Health },
                    { category: "Management", position: "2 open positions", imgSrc: Management },
                    { category: "Sales", position: "2 open positions", imgSrc: Sales },
                    { category: "Banking", position: "1 open positions", imgSrc: Bank },
                    { category: "Marketing", position: "1 open positions", imgSrc: Chart },
                    { category: "Content Writer", position: "3 open positions", imgSrc: Content }
                  ].map((card, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInDown}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Cards category={card.category} position={card.position} imgSrc={card.imgSrc} />
                    </motion.div>
                  ))}
                </div>

            </div>
          </div>


          {/* Company Helped */}
          <div className='findJob-content'>
            <Title text="Companies We've Helped" subtext="Some of the companies we've helped recruit excellent applicants over the years."></Title>
            <div className='slider-conatiner'>
              <Slider {...settings}>

                <div className='slide'><img src={Image1} alt='image1'></img></div>
                <div className='slide'><img src={Image2} alt='image2'></img></div>
                <div className='slide'><img src={Image3} alt='image3'></img></div>
                <div className='slide'><img src={Image4} alt='image4'></img></div>

                <div className='slide'><img src={Image1} alt='image1'></img></div>
                <div className='slide'><img src={Image2} alt='image2'></img></div>
                <div className='slide'><img src={Image3} alt='image3'></img></div>
                <div className='slide'><img src={Image4} alt='image4'></img></div>

              </Slider>

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

          {/* Question */}
          <div className='ques-wrapper'>
              <div className='ques-title'>Gat a question?</div>
              <div className='ques-subtitle'>We're here to help. Send us an email or call us at +1 (800) 555-5555</div>
          </div>

      </div>
    </div>
  )
}
