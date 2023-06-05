import ProfileForm from '@/components/ProfileForm'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useRouter } from 'next/router'
import React from 'react'
import {MdVerifiedUser} from 'react-icons/md'

const createProfile = () => {
  const {auth} = useAuthContext();
  const router = useRouter();
  useEffect( () => {
    if (auth) {
      router.push("/");
    }
  }, [])
  return (
    <div className='w-full flex justify-center items-center'>
        <div className="w-35% bg-blue-100 flex flex-col justify-between items-center m-12 p-12 rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <h1 className='text-4xl font-black'>Create Profile</h1>
              <p className='text-xl font-medium text-slate-500'>Please create a profile</p>
            </div> 
            <div className="mt-12 p-6 rounded-full bg-blue-400">
              <MdVerifiedUser className='text-white text-7xl'/>
            </div>
            <ProfileForm />
        </div>
    </div>
  )
}

export default createProfile