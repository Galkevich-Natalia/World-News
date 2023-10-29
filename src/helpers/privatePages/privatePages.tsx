import { AuthorizedContext } from "../../contexts/authContext/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

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