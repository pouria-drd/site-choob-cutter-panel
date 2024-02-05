import { ROUTES } from '../../router/PathNames';
import SidebarItem from './SidebarItem';
import ChatIcon from './icons/ChatIcon';
import HomeIcon from './icons/HomeIcon';

function Sidebar({ onClick }: { onClick?: () => void }) {
    return (
        <div className="flex flex-col bg-sc-purple-normal w-full h-full p-4 gap-4">
            <SidebarItem
                to={ROUTES.DASHBOARD}
                label="خانه"
                icon={<HomeIcon />}
                onClick={onClick}
            />

            <SidebarItem
                to={ROUTES.SUPPORT}
                label="پشتیبانی"
                icon={<ChatIcon />}
                onClick={onClick}
            />
        </div>
    );
}

export default Sidebar;
