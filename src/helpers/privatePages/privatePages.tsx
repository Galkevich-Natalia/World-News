import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthorizedContext } from "../../contexts/authContext/authContext";

interface CheckAuthorizedUserProps {
    children: JSX.Element;
}

export const CheckAuthorizedUser = ({ children }: CheckAuthorizedUserProps) => {

    const { isAuthorized } = useContext(AuthorizedContext);

    if (isAuthorized) {
        return (
            <div>
                <Navigate to="*" />
            </div>
        );
    } else {
        return children;
    };

    // return isAuthorized ? <Navigate to='*' /> : <>{children}</>
};