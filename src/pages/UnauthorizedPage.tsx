import { ROUTES } from "../router/PathNames";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Button from "../components/custom-ui/Button/Button";

function UnauthorizedPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        auth.logout();

        setTimeout(() => {
            navigate(ROUTES.LOGIN_PAGE);
        }, 100);
    }

    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center font-yekanX h-screen r2l ss02">
            <div className="bg-white flex flex-col items-center justify-start rounded-lg shadow-lg p-5 gap-8 max-w-[90vw]">
                <p>شما اجازه دسترسی به آدرس مورد نطر را ندارید</p>
                <Button onClick={handleLoginClick}>
                    ورود
                </Button>
            </div>
        </div>
    );
}

export default UnauthorizedPage;
