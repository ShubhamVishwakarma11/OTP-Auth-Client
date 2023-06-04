import { useState } from "react";
import { useRouter } from "next/router";

const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const router = useRouter();

    const login = async (email) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${process.env.URL}/api/user/login`, {
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

    return {login, error, isLoading}
}

export default useLogin