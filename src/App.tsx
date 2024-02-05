import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { UserRolesEnum } from './enums/UserRolesEnum';

import CustomRoutes from './router/CustomRoutes';

import Navbar from './components/nav/Navbar';
import Sidebar from './components/nav/Sidebar';

import './assets/styles/App.css';

function App() {
    const { userRole } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const [navbarForcedIconToggle, setNavbarForcedIconToggle] = useState(true);

    const isUserAuthenticated = userRole && userRole !== UserRolesEnum.GUEST;

    const handleToggle = () => {
        setNavbarForcedIconToggle(false);
        setIsOpen(!isOpen);
    };

    const handleSidebarItemClick = () => {
        setNavbarForcedIconToggle(true);
        setIsOpen(!isOpen);
    };

    const sidebarOpenedClass = 'h-auto w-full lg:w-72';
    const sidebarClosedClass = 'hidden h-auto w-72 lg:block';

    const responsiveSidebarToggledClass = isOpen ? sidebarOpenedClass : sidebarClosedClass;

    return (
        <BrowserRouter>
            <main className="flex flex-col justify-between overflow-hidden h-screen ">
                {/* Conditionally render the Navbar based on user authentication */}
                {isUserAuthenticated && (
                    <Navbar
                        onForcedIconToggle={navbarForcedIconToggle}
                        onToggle={handleToggle}
                    />
                )}

                <div className="flex flex-col-reverse lg:flex-row transition-all w-full h-full">
                    <div className="bg-sc-gray overflow-auto w-full h-full p-8">
                        {<CustomRoutes />}
                    </div>

                    {/* Conditionally render the Sidebar based on user authentication */}
                    {isUserAuthenticated && (
                        <div className={responsiveSidebarToggledClass}>
                            <Sidebar onClick={handleSidebarItemClick} />
                        </div>
                    )}
                </div>
            </main>
        </BrowserRouter>
    );
}

export default App;
