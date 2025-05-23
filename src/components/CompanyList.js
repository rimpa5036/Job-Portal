import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../api/fakeApi';
import "../styles/CompanyList.css"
import { motion } from 'framer-motion';
import Pin from "../images/location-pin.svg"
import Industry from "../images/building.svg"


export default function CompanyList({ onSelectCompany }) {


    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const getCompanies = async () => {
            const data = await fetchCompanies();
            setCompanies(data);
        };
        getCompanies();
    }, []);

    const fadeInFromTop = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 }
    };

  return (
    <div className="patient-list" style={{paddingTop: "10px"}}>
        <div className='browse-Bg'>
            <div className='browse-title'>Browse Job</div>
        </div>

        <div className='browse-formWrap'> 
            <div className='browse-subTitle'>Latest Jobs</div>

            {companies.map((company, index) => (
                <motion.div
                    key={company.id}
                    className='browse-box'
                    variants={fadeInFromTop}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <div>
                    <div className='browse-industry'>{company.industry}</div>
                    <div className='browse-box-wrapper'>
                        <div className='browse-flex'>
                        <img src={Industry} alt="industry icon" />
                        <div className='browse-details'>{company.name} |</div>
                        </div>
                        <div className='browse-flex'>
                        <img src={Pin} alt="location icon" />
                        <div className='browse-details'>{company.location}</div>
                        </div>
                    </div>
                    </div>
                    <div className='browse-jobBtn'>
                    <button onClick={() => onSelectCompany(company.id)}>
                        <span>Apply Job</span>
                    </button>
                    </div>
                </motion.div>
            ))}


        </div>
        
    </div>
  )
}
