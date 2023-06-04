import React from 'react'
import useInputState from '@/hooks/useInputState'

const SignUpForm = () => {
    const [email, resetEmail, handleEmail] = useInputState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        resetEmail();
    }
    
  return (
    <form className='w-full mt-8 flex flex-col gap-8' onSubmit={handleSubmit}>
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
        <button type='submit' className='bg-green-500 p-4 rounded-lg hover:bg-green-600 transition-none'>
            <p className='text-white text-lg font-semibold'>Get OTP</p>
        </button>
        
    </form>
  )
}

export default SignUpForm