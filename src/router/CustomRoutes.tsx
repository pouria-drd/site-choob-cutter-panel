import { ROUTES } from "./PathNames";
import { Route, Routes } from "react-router-dom";
import { UserRolesEnum } from "../enums/UserRolesEnum";

import PrivateRoute from "./PrivateRoute";

import {
    // public
    HomePage, UnauthorizedPage, NotFoundPage, LoginPage,
    // private
    DashBoardPage, SupportPage,
    ChatPage
} from "../pages";

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

            <Route
                path={ROUTES.SUPPORT}
                element={
                    <PrivateRoute element={<SupportPage />}
                        allowedRoles={[UserRolesEnum.Customer]} />} />

            <Route
                path={ROUTES.CHAT}
                element={
                    <PrivateRoute element={<ChatPage />}
                        allowedRoles={[UserRolesEnum.Customer]} />} />
        </Routes>
    );
}

export default CustomRoutes;
