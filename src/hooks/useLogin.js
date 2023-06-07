import { useState } from "react";
import { useRouter } from "next/router";
import { useEmailContext } from "./useEmailContext";

const useLogin = () => {
    const {dispatch} = useEmailContext();
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const router = useRouter();

    const login = async (email, recaptchaValue) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, recaptchaValue})
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

    return {login, error, isLoading}
}

export default useLogin