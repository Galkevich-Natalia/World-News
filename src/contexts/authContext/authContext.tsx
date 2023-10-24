import { isAuth } from "helpers/isAuth/isAuth";
import { createContext, useEffect, useState } from "react";

export interface AuthorizedContextType {
    isAuthorized: boolean;
    loginF: () => void;
    logoutF: () => void
}

interface BodyProps {
    children: React.ReactNode
}

const initialAuthContext: AuthorizedContextType = {
    isAuthorized: false,
    loginF: () => {},
    logoutF: () => {}
}

export const AuthorizedContext = createContext<AuthorizedContextType>(initialAuthContext);

export const AuthorizedContextProvider = ({ children }: BodyProps) => {

    const [isUserAuth, setIsUserAuth] = useState<boolean>(false);

    useEffect(() => {
        const userDataFromStore = isAuth();
        setIsUserAuth(userDataFromStore)
    }, [])

    const logIn = () => {
        setIsUserAuth(true);
    };

    const logOut = () => {
        setIsUserAuth(false);
    };

    return (
        <AuthorizedContext.Provider
            value={{
                isAuthorized: isUserAuth,
                loginF: logIn,
                logoutF: logOut
            }}
        >
            {children}
        </AuthorizedContext.Provider>
    );
};
