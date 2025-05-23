import React from 'react'
import "../styles/ResumeDetails.css"
import Profile from "../images/candidate.png"
import Mail from "../images/mail.svg"
import Loc from "../images/pin.svg"
import Call from "../images/telephone1.svg"
import Address from "../images/location-1.svg"
import Postal from "../images/pin-1.svg"
import Experience from "../images/exp.svg"

export default function ResumeDetails({ details }) {


  return (
    <div>
      {details.length > 0 && (
          <div className="candidate-table">
              <h2>Candidate Details</h2>

              <div className='candidate-bg'>
                <div className='candidate-wrapper'>
                  <img src={Profile} className='candidate-wrapper-img'></img>

                  <div style={{ flex: "0.9" }}>
                  {details.map((details, index) => (
                      <div key={index} className='candidate-flex-wrap'>
                        <div className='candidate-flex'>
                            <div className='candidate-fullname'>{details.firstname}</div>
                            <div className='candidate-fullname'>{details.lastname}</div>
                        </div>
                        <div className='candidate-flex'>
                          <img src={Mail}></img>
                          <div className='candidate-mail'>{details.email}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    {details.map((details, index) => (
                        <div key={index} className='candidate-flex-wrap'>
                          <div className='candidate-flex candidate-flex-loc'>
                            <img src={Loc}></img>
                            <div className='candidate-mail' style={{color: "#fff"}}>{details.city}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                  
                </div>

              </div>

              
              <div>
                  <div className='candidate-flex-content'>
                        
                        <div style={{flex: '0.8'}}>
                          <div className='candidate-overview'>About the Candidate</div>
                          {details.map((details, index) => (
                            <div key={index} className='candidate-flex-wrap'>
                                <div className='candidate-mail'>{details.coverLetter}</div>
                            </div>
                          ))}
                          <div style={{marginTop: '50px'}}>
                              <div className='candidate-overview'>Key skills</div>
                              {details.map((details, index) => (
                                <div key={index} className='candidate-flex-wrap'>
                                    <div className='candidate-mail'>{details.skills}</div>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div style={{flex: '0.4'}}>
                          <div className='candidate-overview'>Candidate Overview</div>
                          <div className='candidate-box'>
                              <div className='candidate-box-flex'>
                                  <img src={Call}></img>
                                  <div>
                                      <div className='candidate-title'>Contact</div>
                                      {details.map((details, index) => (
                                        <div key={index} className='candidate-flex-wrap'>
                                            <div className='candidate-mail'>{details.phoneNo}</div>
                                        </div>
                                      ))}
                                  </div>
                              </div>
                              <div className='candidate-box-flex'>
                                  <img src={Address}></img>
                                  <div>
                                      <div className='candidate-title'>Location</div>
                                      {details.map((details, index) => (
                                        <div key={index} className='candidate-flex-wrap flex-row'>
                                            <div className='candidate-mail'>{details.location},</div>
                                            <div className='candidate-mail'>{details.state}</div>
                                        </div>
                                      ))}
                                  </div>
                              </div>
                              <div className='candidate-box-flex'>
                                  <img src={Postal}></img>
                                  <div>
                                      <div className='candidate-title'>Pin Code</div>
                                      {details.map((details, index) => (
                                        <div key={index} className='candidate-flex-wrap flex-row'>
                                            <div className='candidate-mail'>{details.postal}</div>
                                        </div>
                                      ))}
                                  </div>
                              </div>
                              <div className='candidate-box-flex'>
                                  <img src={Experience}></img>
                                  <div>
                                      <div className='candidate-title'>Experience</div>
                                      {details.map((details, index) => (
                                        <div key={index} className='candidate-flex-wrap flex-row'>
                                            <div className='candidate-mail'>{details.experience}</div>
                                        </div>
                                      ))}
                                  </div>
                              </div>


                          </div>
                        </div>
                    </div>
            
              </div>
          </div>
      )}

    </div>
  )
}
