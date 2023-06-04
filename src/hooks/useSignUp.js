import { useState } from "react";
import { useRouter } from "next/router";

const useSignUp = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const router = useRouter();

    const signup = async (email) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${process.env.URL}/api/user/signup`, {
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
            router.push('/verif-otp')
        }
    }

    return {signup, error, isLoading}
}

export default useSignUp