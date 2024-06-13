import { createContext,useState } from "react";

const AuthContext = createContext({})

export const AuthProvider=({children})=>{
   
    const [user,setUser] = useState({});
    const [isLogged,setLogged] = useState(false)
    return (
        <AuthContext.Provider value={{user,setUser,isLogged,setLogged}}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;