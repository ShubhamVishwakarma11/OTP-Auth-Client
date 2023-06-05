import { useState } from "react";
import { useAuthContext} from './useAuthContext'
import { useRouter } from "next/router";
import { useEmailContext } from "./useEmailContext";

const useVerifyOTP = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();


    const router = useRouter();

    const verifyOTP = async (email, otp) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/verify-otp`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,otp})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
            router.push('/create-profile')
        }
    }

    return {verifyOTP, error, isLoading}
}

export default useVerifyOTP