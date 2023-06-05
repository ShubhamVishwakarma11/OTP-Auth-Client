import { useAuthContext } from '@/hooks/useAuthContext';
import { Open_Sans } from 'next/font/google';
import {MdOutlineVerifiedUser} from 'react-icons/md'
import ProfileDetails from '@/components/ProfileDetails';

export const open_sans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  const {user} = useAuthContext();

  return (
    <div className='w-full flex justify-center items-center'>
        <div className="w-35% bg-blue-100 flex flex-col justify-between items-center m-12 p-12 rounded-xl">
            <div className="w-full flex flex-col justify-start items-start">
              <h1 className='text-4xl font-black'>Profile</h1>
              <p className='text-xl font-medium text-slate-500'> Your details</p>
            </div> 
            <div className='flex justify-center items-center gap-12 mt-12'> 
              <div className=" p-6 rounded-full bg-blue-400">
                <MdOutlineVerifiedUser className='text-white text-7xl'/>
              </div>
              {user && <ProfileDetails user={user} />}
            </div>
        </div>
    </div>
  )
}
