import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const ProfileDetails = ({user}) => {
  const [data, setData] = useState();
  const router = useRouter();

  useEffect( ()=> {
    const fetchProfile = async () => {
      if (!user) {
        return 
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/profile/get`, {
        headers : {
          'Authorization': `bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) { 
        if (!json.name) router.push("/create-profile");
        setData(json);
        console.log(data);
      }

    }

    fetchProfile();

  }, [])
  return (
    <div className='bg-blue-400 p-4 rounded-lg flex flex-col items-start justify-between gap-4'>
      <div className='flex flex-col justify-center items-start gap-0'>
          <p className='text-md text-blue-100'>Name </p>
          <p className='text-xl text-white font-semibold'>{data && data.name}</p>
      </div>
      <div className='flex flex-col justify-center items-start gap-0'>
          <p className='text-md text-blue-100'>Email </p>
          <p className='text-xl text-white font-semibold'>{data && data.email}</p>
      </div>
      <div className='flex flex-col justify-center items-start gap-0'>
          <p className='text-md text-blue-100'>Phone </p>
          <p className='text-xl text-white font-semibold'>{data && data.phone}</p>
      </div>
    </div>
  )
}

export default ProfileDetails