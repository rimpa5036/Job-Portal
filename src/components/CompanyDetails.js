import React, { useEffect, useState } from 'react'
import { fetchCompanyById } from '../api/fakeApi';
import "../styles/CompanyList.css"
import Pin from "../images/location-pin.svg"
import Phone from "../images/phone-detail.svg"
import Mail from "../images/mail-open.svg"
import Salary from "../images/money.svg"
import Experience from "../images/rocket.svg"

export default function CompanyDetails({ companyId }) {

    const [company, setCompany] = useState(null);

    useEffect(() => {
        const getCompany = async () => {
            const data = await fetchCompanyById(companyId);
            setCompany(data);
        };
        getCompany();
    }, [companyId]);

    if (!company) {
        return <div>Loading...</div>;
    }


  return (
    <div>
        <div className='details-Bg'>
            <div className='browse-title'>{company.industry}</div>
        </div>
        <div className='browse-formWrap'>
            <div class="browse-subTitle">Job Overview</div>
            <div className='deatils-grid'>
            <div>
                <div className='browse-box'>
                    <div>
                        <div className='browse-industry'>{company.name}</div>
                        <div className='browse-box-wrapper'>
                            <div class="browse-flex">
                                <img src={Phone}></img>
                                <div class="browse-details">{company.contact}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="browse-industry">Company Description</div>
                <div className='details-description'>{company.companyDescription}</div>
                <div className='browse-industry'>Overview</div>
                <div className='details-description'>{company.jobOverview}</div>
            </div>
                <div>
                    <div className='browse-box-1'>
                        <div className='browse-box-wrapper'>
                            <img src={Pin} className='browse-overview-img'></img>
                            <div>
                                <div className='details-title'>Location</div>
                                <div className='deatils-title-name'>{company.location}</div>
                            </div>
                        </div>
                        <div className='browse-box-wrapper'>
                            <img src={Mail} className='browse-overview-img'></img>
                            <div>
                                <div className='details-title'>Email</div>
                                <div className='deatils-title-name'>{company.email}</div>
                            </div>
                        </div>
                        <div className='browse-box-wrapper'>
                            <img src={Salary} className='browse-overview-img'></img>
                            <div>
                                <div className='details-title'>Salary</div>
                                <div className='deatils-title-name'>{company.salary}</div>
                            </div>
                        </div>
                        <div className='browse-box-wrapper'>
                            <img src={Experience} className='browse-overview-img'></img>
                            <div>
                                <div className='details-title'>Experience</div>
                                <div className='deatils-title-name'>{company.experience}</div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
 
    </div>
  )
}


