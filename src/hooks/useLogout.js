import { useRouter } from "next/router"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const router = useRouter();
    const {dispatch} = useAuthContext()

    const logout = async () => {
        localStorage.removeItem('user')

        dispatch({type: "LOGOUT"})
        router.push('/login')
    }

    return {logout}
}