import { useState } from "react";
import { ToastStatusEnum, useToast } from "../components/Toast/ToastProvider";

import BaseCard from "../components/custom-ui/Cards/BaseCard";

function DashBoardPage() {
    const { showToast } = useToast();

    // State to store user data
    const [isLoading, setIsLoading] = useState(false);

    // Function to fetch user data
    const fetchData = async () => {
        handleShowToast();
    };

    const handleShowToast = () => {
        showToast('خوش آمدید', ToastStatusEnum.Info, "تست", 50000);
    };

    return (
        <BaseCard>
            <p className="">
                Hello from Dashboard...
            </p>
        </BaseCard>
    );
}

export default DashBoardPage;