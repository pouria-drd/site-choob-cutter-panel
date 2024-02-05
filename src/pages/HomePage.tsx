import { useEffect } from "react";
import { ROUTES } from "../router/PathNames";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { UserRolesEnum } from "../enums/UserRolesEnum";
import BaseCard from "../components/custom-ui/Cards/BaseCard";

function HomePage() {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const isCustomer = auth.userRole === UserRolesEnum.Customer;

        isCustomer ? navigate(ROUTES.DASHBOARD) : navigate(ROUTES.LOGIN_PAGE)
    }, [])

    return (
        <BaseCard className="justify-center">
            <p className="text-lg">
                لطفا صبر کنید ...
            </p>
        </BaseCard>
    );
}

export default HomePage;