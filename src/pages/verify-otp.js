
import VerifyForm from '@/components/VerifyForm'
import Link from 'next/link'
import React from 'react'
import {RiLockPasswordFill} from 'react-icons/ri'

const VerifyOTP = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className="w-35% bg-blue-100 flex flex-col justify-between items-center m-12 p-12 rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <h1 className='text-4xl font-black'>Verify OTP</h1>
              <p className='text-xl font-medium text-slate-500'>Please enter the verification code received on the email</p>
            </div> 
            <div className="mt-12 p-6 rounded-full bg-blue-400">
              <RiLockPasswordFill className='text-white text-7xl'/>
            </div>
            <VerifyForm />
            <div className='w-full flex justify-center items-center gap-2'>
                <p className='text-md mt-2 text-slate-500'> Wrong Email? </p>
                <Link href="/signup">Signup</Link>
                <Link href="/login">Login</Link>
            </div>
        </div>
    </div>
  )
}

export default VerifyOTP
