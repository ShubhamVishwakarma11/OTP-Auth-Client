import React, { useRef, useState } from 'react';
import useInputState from '@/hooks/useInputState';
import useSignUp from '@/hooks/useSignUp';
import {ImSpinner2} from 'react-icons/im';
import ReCAPTCHA from 'react-google-recaptcha';

const SignUpForm = () => {
    const {signup, error, isLoading} = useSignUp();
    const [recaptchaValue, setRecaptchaValue] = useState();
    const [email, resetEmail, handleEmail] = useInputState("");

    const captchaRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, recaptchaValue);
        await signup(email);
        resetEmail();
        captchaRef.current.reset();
    }

    const handleChange = (value) => {
        setRecaptchaValue(value);
    }
    
  return (
    <form className='w-full mt-8 flex flex-col gap-8' onSubmit={handleSubmit}>
        {error && 
            <div className="p-3 border-2 border-red-500 bg-red-200 w-full">
                <p className='text-red-500'> {error} </p>
            </div>
        }
        <div className="flex flex-col items-start">
            <label htmlFor='email' className='text-slate-700 text-lg font-semibold'>Email</label>
            <input
                className='w-full border-2 shadow-md rounded-lg p-2'
                id="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter your email"
            />
        </div>
        
        <ReCAPTCHA
            onChange={handleChange}
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
            ref={captchaRef}
        />

        <button type='submit' disabled={isLoading} className='bg-green-500 p-4 rounded-lg hover:bg-green-600 transition-none'>
        {isLoading? 
                <div className='flex items-center justify-center gap-2'>
                    <ImSpinner2 className="text-white text-lg animate-spin"/>
                    <p className='text-white text-lg font-semibold'>Sending OTP</p>
                </div>
            : <p className='text-white text-lg font-semibold'>Get OTP</p>
            }
        </button>
        
    </form>
  )
}

export default SignUpForm