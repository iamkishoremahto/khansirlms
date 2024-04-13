import create from 'zustand';
import {jwtDecode} from 'jwt-decode';  

const initializeUser = () => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
        try {
            const decoded = jwtDecode(accessToken);
            return decoded;
        } catch (error) {
            console.error('Failed to decode access token:', error);
            return {};
        }
    }
    return {};
};

export const useAuthProvider = create((set) => ({
    user: initializeUser(), 
    setUser: () => {
        const user = initializeUser();
        set({ user });
    }
}));
