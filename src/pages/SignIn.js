import React, {useState} from 'react';
import "../styles/SignIn.css"
import Title from '../components/Title'
import LoginImg from "../images/createaccount.jpg"

export default function SignIn() {


    const [error, setError] = useState({});

    const [loginData, setLoginData] = useState({
        email: '',
        password:''
    })

    const handleChange = (e)=>{

        const{name,value} = e.target;
        setLoginData({
            ...loginData,
            [name]:value
        })
    }


    const handleReset = () =>{
        setLoginData({
            email: '',
            password: ''
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const newError = validateForm(loginData);
        setError(newError);

        if (Object.keys(newError).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
            console.log("Form Data is: ", loginData);
            handleReset();

        } else {
            console.log('Form submission failed due to validation errors.');
        }
    }

        const validateForm = (data) => {
        const error = {};


        if (!data.email.trim()) {
            error.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            error.email = 'Email is invalid';
        }

        if (!data.password) {
            error.password = 'Password is required';
        } else if (data.password.length < 8) {
            error.password = 'Password must be at least 8 characters long';
        }


        return error;
    };

  return (
    <div className='login-content'>
        <img src={LoginImg} alt=''></img>

        <form onSubmit={handleSubmit}>
             <Title text="Sign In"></Title>

             <div style={{marginTop: "40px"}}>
                <div className='login-input-title'>Email</div>
                <input 
                type='email' 
                name='email'
                value={loginData.email} 
                onChange={handleChange}
                placeholder='Your email' 
                className='login-inputfield'></input>
                {error.email && (
                    <span className="error-message">
                        {error.email}
                    </span>
                )}
               
             </div>

             <div>
                <div className='login-input-title'>Password</div>
                <input type='password'
                 name='password'
                 value={loginData.password} 
                 onChange={handleChange}
                 placeholder='Your password' 
                 className='login-inputfield'></input>
                 {error.password && (
                    <span className="error-message">
                        {error.password}
                    </span>
                )}
                
             </div>

            <button type='submit'><span>Sign In</span></button>
        </form>
    </div>
  )
}
