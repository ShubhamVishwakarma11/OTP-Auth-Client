import { useAuthContext } from '@/hooks/useAuthContext'
import { useLogout } from '@/hooks/useLogout'
import { open_sans } from '@/pages'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {user} = useAuthContext();
  const {logout} = useLogout();

  const handleClick = async () => {
    await logout();
  }
  return (
    <div className='w-full flex justify-center items-center bg-blue-600 text-white'>
        <div className="w-80% flex justify-between items-center h-[4rem]">
            <div className="">
                <h1 style={open_sans.style} className='text-2xl font-bold'><Link href="/">OTP Auth</Link></h1>
            </div>
                {user ? 
                  <div className="flex justify-between gap-10 items-center text-lg">
                      <p className=''> Hi {user.email}</p>
                      <button onClick={handleClick}>Logout</button>
                  </div>
                  : <div className="flex justify-between gap-10 items-center text-lg">
                      <Link href="/login">Login</Link>
                      <Link href="/signup">SignUp</Link>
                  </div>
                }
            
        </div>
    </div>
  )
}

export default Navbar