
import { useLocalStorage } from "./useLocalStorage";
import { jwtDecode } from 'jwt-decode'; 

export const useUser = () => {
    const { getAccessToken } = useLocalStorage();
    const getUser = () => {
        let user = getAccessToken()
        if(!user)
            return jwtDecode(getAccessToken());
        else return null;
    }
    return { getUser }
}