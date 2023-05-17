import {createContext, usestate} from "react";

const LoginContext = createContext()

const LoginProvider =({children}) => {
    const [isLoggedIn, setIsLoggIn] = useState(false)

    return <loginContext.Provider vlaue={{ isLoggedIn, setIsLoggedIn}}>
        {children}
    </loginContext.Provider>

}

export const useLogin = () => useContext(LoginContext)

export default LoginProvider;