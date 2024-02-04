import { ROUTES } from "./PathNames";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { UserRolesEnum } from "../enums/UserRolesEnum";
import { HomePage, UnauthorizedPage, NotFoundPage, LoginPage } from "../pages";

function CustomRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
            <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />

            {/* Private Routes */}
            <Route
                path={ROUTES.HOME}
                element={
                    <PrivateRoute element={<HomePage />}
                        allowedRoles={[UserRolesEnum.Customer]} />} />
        </Routes>
    );
}

export default CustomRoutes;
