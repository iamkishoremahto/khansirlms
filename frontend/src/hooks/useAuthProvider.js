import { create } from 'zustand';
import {jwtDecode} from 'jwt-decode';  

export const useAuthProvider = create((set) => ({
    user: {},
    setUser: () => set(() => {
        const accessToken = localStorage.getItem('access_token');
        
        
        
        if (accessToken) {
            const decode = jwtDecode(accessToken)
            return { user: decode };
        } else {
            return { user: {} };
        }
    })
}));
