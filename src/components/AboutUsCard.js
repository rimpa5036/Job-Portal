import React from 'react'
import '../styles/AboutUsCard.css';
import { motion } from 'framer-motion';

export default function AboutUsCard(props) {

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
        className='aboutCard-container'
        variants={fadeInFromTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className='aboutCard-title-wrap'>
          <img src={props.imgCard} alt='imageIcon' className='aboutCard-img' />
          <div className='aboutCard-title'>{props.title}</div>
        </div>
        <div className='aboutCard-para'>{props.para}</div>
    </motion.div>
  )
}
