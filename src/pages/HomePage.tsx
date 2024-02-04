import { useEffect } from "react";
import { ROUTES } from "../router/PathNames";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UserRolesEnum } from "../enums/UserRolesEnum";

function HomePage() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const isCustomer = auth.userRole === UserRolesEnum.Customer;

        isCustomer ? navigate(ROUTES.DASHBOARD) : navigate(ROUTES.LOGIN_PAGE)
    }, [])

    return (
        <div className="bg-white flex flex-col items-center h-full p-10 gap-4">
            <p className="toast-progress">Hello from home...</p>
        </div>
    );
}

export default HomePage;