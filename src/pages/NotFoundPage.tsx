import { ROUTES } from "../router/PathNames";
import { useNavigate } from "react-router-dom";

import Button from "../components/custom-ui/Button/Button";
import BaseCard from "../components/custom-ui/Cards/BaseCard";

function NotFoundPage() {
    const navigate = useNavigate();


    const handleLoginClick = () => {
        navigate(ROUTES.DASHBOARD);
    }

    return (
        <BaseCard className="justify-center">
            <p className="text-xl">
                صفحه مورد نظر پیدا نشد
            </p>

            <Button onClick={handleLoginClick}>
                بازگشت به خانه
            </Button>
        </BaseCard>
    );
}

export default NotFoundPage;