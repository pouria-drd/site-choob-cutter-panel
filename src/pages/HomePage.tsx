import { useState } from "react";
import { ToastStatusEnum, useToast } from "../components/Toast/ToastProvider";

function HomePage() {
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
        <div className="bg-white flex flex-col items-center h-full p-10 gap-4">
            <p className="toast-progress">Hello from home...</p>
        </div>
    );
}

export default HomePage;