import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'
import {MdEmail} from 'react-icons/md'

const Login = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className="w-30% bg-blue-100 flex flex-col justify-between items-center m-12 p-12 rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <h1 className='text-4xl font-black'>Login</h1>
              <p className='text-xl font-medium text-slate-500'>Please sign in to continue</p>
            </div> 
            <div className="mt-12 p-6 rounded-full bg-blue-400">
              <MdEmail className='text-white text-7xl'/>
            </div>
            <LoginForm />
            <p className='text-md mt-2 text-slate-500'> No Account? <Link href="/signup">Create One</Link></p>
        </div>
    </div>
  )
}

export default Login