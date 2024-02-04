import { ROUTES } from "./PathNames";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UserRolesEnum } from "../enums/UserRolesEnum";

interface PrivateRouteProps {
    element: React.ReactNode;
    allowedRoles: UserRolesEnum[];
}

/**
 * PrivateRoute Component for role-based and authenticated routing.
 *
 * @param {React.ReactNode} element - The element to be rendered if authorized.
 * @param {UserRolesEnum[]} allowedRoles - An array of allowed roles.
 *
 * @returns {React.ReactNode} - Rendered element or redirection to unauthorized page.
 */
const PrivateRoute = ({ element, allowedRoles }: PrivateRouteProps) => {
    const { userRole } = useAuth();

    //  Redirect or show an unauthorized message based on authentication and roles
    if (!userRole || (allowedRoles && !allowedRoles.includes(userRole))) {
        return <Navigate to={ROUTES.UNAUTHORIZED} />;
    }

    return element;
};

export default PrivateRoute;
