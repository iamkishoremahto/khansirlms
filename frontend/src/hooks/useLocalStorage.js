
export const  useLocalStorage = () =>{
    const setAccessToken = (value) =>{
        try{
            if(value !== undefined && value !== null)
            localStorage.setItem('access_token', JSON.stringify(value));
        }
        catch(err){
            console.error(err);
        }
    }

    const setRefreshToken = (value) =>{
        try{
            if(value !== undefined && value !== null)
            localStorage.setItem('refresh_token', JSON.stringify(value));
        }
        catch(err){
            console.error(err);
        }
    }

    const getAccessToken = () =>{
        try{
            return localStorage.getItem('access_token');
        }
        catch(err){
            console.error(err);
            return null;
        }
    }

    const getRefreshToken = () =>{
        try{
            return localStorage.getItem('refresh_token');
        }
        catch(err){
            console.error(err);
            return null;
        }
    }

    return { setAccessToken,setRefreshToken, getAccessToken, getRefreshToken }
}