import SidebarItem from './SidebarItem';
import HomeIcon from './icons/HomeIcon';

function Sidebar({ onClick }: { onClick?: () => void }) {
    return (
        <div className="flex flex-col bg-sc-purple-normal w-full h-full p-4 gap-4">
            <SidebarItem
                label="خانه"
                icon={<HomeIcon />}
                onClick={onClick}
            />
        </div>
    );
}

export default Sidebar;
