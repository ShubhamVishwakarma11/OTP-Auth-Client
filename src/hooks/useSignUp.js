import { useState } from "react";
import { useRouter } from "next/router";
import { useEmailContext } from "./useEmailContext";

const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useEmailContext();

    const router = useRouter();

    const signup = async (email) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/signup`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            setIsLoading(false)
            dispatch({type: "ADD", payload: email})
            router.push('/verify-otp')
        }
    }

    return {signup, error, isLoading}
}

export default useSignUp