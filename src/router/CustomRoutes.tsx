import { ROUTES } from "./PathNames";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { UserRolesEnum } from "../enums/UserRolesEnum";
import { HomePage, DashBoardPage, UnauthorizedPage, NotFoundPage, LoginPage } from "../pages";

function CustomRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
            <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />

            {/* Private Routes */}
            <Route
                path={ROUTES.DASHBOARD}
                element={
                    <PrivateRoute element={<DashBoardPage />}
                        allowedRoles={[UserRolesEnum.Customer]} />} />
        </Routes>
    );
}

export default CustomRoutes;
