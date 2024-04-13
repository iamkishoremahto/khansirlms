import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../hooks/useAuthProvider";


export default function ProtectedRoute({children}){

    const { user,setUser } = useAuthProvider(state => ({ user: state.user, setUser: state.setUser }));
   


    const navigate = useNavigate();
  
    
    useEffect(() => {
      
        setUser();
        console.log('user',user)

        const length = Object.keys(user).length;
        
        if(user === null || user === undefined || length === 0){
            navigate('/login/',{replace: true});
        }
    },[navigate]);
    return children;
}