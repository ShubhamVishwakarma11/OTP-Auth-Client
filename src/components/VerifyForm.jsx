import React from 'react'
import useInputState from '@/hooks/useInputState'
import useVerifyOTP from '@/hooks/useVerifyOTP';
import { useEmailContext } from '@/hooks/useEmailContext';
import useLogin from '@/hooks/useLogin';

const VerifyForm = () => {
    const { email  } = useEmailContext()
    const {verifyOTP, error, isLoading} = useVerifyOTP();
    const {login} = useLogin();
    const [counter, setCounter] = React.useState(180);
    const [OTP, resetOTP, handleOTP] = useInputState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(OTP);
        await verifyOTP(email, OTP);
        resetOTP();
    }

    const resendOTP = async () => {
        await login(email);
        resetOTP();
    }

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    
  return (
    <form className='w-full mt-8 flex flex-col gap-8 items-center' onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-2">
            <label htmlFor='OTP' className='text-slate-700 text-xl font-semibold'>OTP</label>
            <input
                className='w-35% border-2 shadow-md rounded-lg p-2'
                id="OTP"
                value={OTP}
                onChange={handleOTP}
                placeholder="X X X X X X"
            />
        </div>
        {counter ? 
            <p className='text-md text-slate-500'>Verification Code will expire in 
                <span className='text-black font-bold'> {counter} </span> Seconds
            </p>
            :
            <div className="flex justify-center items-center gap-2">
                <p className='text-md text-slate-500'>Verification Code expired</p>
                <button className='' onClick={resendOTP}>Resend OTP</button>
            </div>
            
        }
        <button type='submit' className='bg-green-500 w-full p-4 rounded-lg hover:bg-green-600 transition-none'>
            <p className='text-white text-lg font-semibold'>Verify OTP</p>
        </button>
        
    </form>
  )
}

export default VerifyForm