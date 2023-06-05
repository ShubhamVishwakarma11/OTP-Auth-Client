import { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "./useAuthContext";

const useCreateProfile = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {user} = useAuthContext();

    const router = useRouter();

    const createProfileFunc = async (name, phone) => {
        setError(null)
        setIsLoading(true)

        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/profile/create`, {
            method: "POST",
            body: JSON.stringify({name, phone}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            setIsLoading(false)
            router.push('/')
        }
    }

    return {createProfileFunc, error, isLoading}
}

export default useCreateProfile