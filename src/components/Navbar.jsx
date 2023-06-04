import { open_sans } from '@/pages'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center items-center bg-blue-600 text-white'>
        <div className="w-80% flex justify-between items-center h-[4rem]">
            <div className="">
                <h1 style={open_sans.style} className='text-2xl font-bold'>OTP Auth</h1>
            </div>
            <div className="flex justify-between gap-10 items-center text-lg">
                <Link href="/login">Login</Link>
                <Link href="/signup">SignUp</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar