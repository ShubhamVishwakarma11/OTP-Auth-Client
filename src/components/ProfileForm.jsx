import React from 'react'
import useInputState from '@/hooks/useInputState'
import { useRouter } from 'next/router';
import useCreateProfile from '@/hooks/useCreateProfile';

const ProfileForm = () => {
    const {createProfileFunc, error, isLoading} = useCreateProfile(); 
    const [name, resetName, handleName] = useInputState("");
    const [phone, resetPhone, handlePhone] = useInputState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name);
        console.log(phone);
        await createProfileFunc(name, phone);
        resetName();
        resetPhone();
    }

  return (
    <form className='w-full mt-8 flex flex-col gap-8' onSubmit={handleSubmit}>
        <div className="flex flex-col items-start">
            <label htmlFor='name' className='text-slate-700 text-lg font-semibold'>Name</label>
            <input
                className='w-full border-2 shadow-md rounded-lg p-2'
                id="name"
                value={name}
                onChange={handleName}
                placeholder="Enter your name"
            />
        </div>
        <div className="flex flex-col items-start">
            <label htmlFor='name' className='text-slate-700 text-lg font-semibold'>Mobile Number</label>
            <input
                className='w-full border-2 shadow-md rounded-lg p-2'
                id="name"
                value={phone}
                onChange={handlePhone}
                placeholder="Enter your mobile number"
            />
        </div>
        <button type='submit' className='bg-green-500 p-4 rounded-lg hover:bg-green-600 transition-none'>
            <p className='text-white text-lg font-semibold'>Create Profile</p>
        </button>
        
    </form>
  )
}

export default ProfileForm