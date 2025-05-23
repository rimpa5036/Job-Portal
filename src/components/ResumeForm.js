import React, { useRef, useState } from "react";
import "../styles/ResumeDetails.css"
import UploadFile from "../images/upload.svg"
import { useNavigate } from "react-router-dom";

export default function ResumeForm({ onSubmit = () => {} }) {

  const fileInputRef = useRef(null);
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const names = files.map((file) => file.name);
    setFileNames(names);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };


    const [resumeData, setResumeData] = useState({
        firstname: '',
        lastname: '',
        location: '',
        city: '',
        state: '',
        postal: '',
        phoneNo: '',
        email: '',
        experience: '',
        skills: '',
        coverLetter: '',
        resume: ''
    });

     const navigate = useNavigate();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setResumeData({
            ...resumeData,
            [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Candidate Details:', resumeData);
        onSubmit(resumeData); // Pass data to parent component
        navigate('/details'); // navigate to the new screen
        setResumeData({
          firstname: '',
          lastname: '',
          location: '',
          city: '',
          state: '',
          postal: '',
          phoneNo: '',
          email: '',
          experience: '',
          skills: '',
          coverLetter: '',
          resume: ''
        });
    };



  return (
    <div>
        <div className='resume-Bg'>
            <div className='resume-Bg-title'>Submit Resume</div>
        </div>

        <form className='resume-form' onSubmit={handleSubmit}>

          <div className='resume-form-div'>
            <label>Full Name: <span style={{color: "red"}}>*</span></label>
            <div className='resume-flex'>
              <input id="firstname" placeholder="First name" type="text" name="firstname" value={resumeData.firstname} onChange={handleChange} required></input>
              <input id="lastname" placeholder="Last name" type="text" name="lastname" value={resumeData.lastname} onChange={handleChange} required></input>
            </div>
          </div>


          <div className='resume-form-div'>
            <label>Address:</label>
            <div className='resume-flex'>
              <input id="location" placeholder="Street Address" type="text" name="location" value={resumeData.location} onChange={handleChange}></input>
            </div>
          </div>


          <div className='resume-form-div'>
            <div className='resume-flex'>
              <input id="city" placeholder="City" type="text" name="city" value={resumeData.city} onChange={handleChange}></input>
              <input id="state" placeholder="State/Province" type="text" name="state" value={resumeData.state} onChange={handleChange}></input>
            </div>
          </div>


          <div className='resume-form-div'>
            <div className='resume-flex'>
              <input id="postal" placeholder="Postal/Zip Code" type="text" name="postal" value={resumeData.postal} onChange={handleChange}></input>
            </div>
          </div>


          <div className='resume-form-div'>
            <label>Phone: <span style={{color: "red"}}>*</span></label>
            <div className='resume-flex'>
              <input id="phoneNo" placeholder="(000) 000-0000" type="text" style={{width: '50%'}} name="phoneNo" value={resumeData.phoneNo} onChange={handleChange} required></input>
            </div>
          </div>


          <div className='resume-form-div'>
            <label>E-mail: <span style={{color: "red"}}>*</span></label>
            <div className='resume-flex'>
              <input id="email" placeholder="name@example.com" type="text" style={{width: '50%'}} name="email" value={resumeData.email} onChange={handleChange} required></input>
            </div>
          </div>


          <div className='resume-form-div'>
            <label>Experience:</label>
            <div className='resume-flex'>
              <input id="experience" placeholder="Year of experience" type="text" name="experience" value={resumeData.experience} onChange={handleChange}></input>
              <input id="skills" placeholder="Skills" type="text" name="skills" value={resumeData.skills} onChange={handleChange}></input>
            </div>
          </div>


          <div className='resume-form-div'>
            <label>Resume Overview:</label>
            <div className='resume-flex'>
              <textarea id='coverLetter' rows={9} style={{width: '50%'}} name="coverLetter" value={resumeData.coverLetter} onChange={handleChange}></textarea>
            </div>
          </div>


          <div className='resume-form-div'>
            <label>Upload Resume <span style={{color: "red"}}>*</span></label>
            <div>
              <div className='resume-uploadFile' onClick={handleClick} onChange={handleChange} required>
                  <img src={UploadFile}></img>
                  <div className='resume-upload-text'>Upload a File</div>
              </div>
              <input
                type="file"
                className="resumeInput-text"
                accept=".jpg,.jpeg,.pdf,.png"
                multiple
                id="resume"
                ref={fileInputRef}
                onChange={handleFileChange}
                name="resume"
                value={resumeData.resume}
                style={{ display: "none" }}
              ></input>

              {fileNames.length > 0 && (
                <div className="resume-file-names">
                  {fileNames.map((name, index) => (
                    <div key={index}>{name}</div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="resume-submit"><span>Submit Form</span></button>

        </form>
    </div>
  )
}

