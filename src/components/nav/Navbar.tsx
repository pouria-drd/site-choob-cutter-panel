import { useEffect, useState } from 'react';

import Burger from './icons/Burger';
import CloseIcon from './icons/CloseIcon';
import SiteChoobIcon from '../Icons/SiteChoobIcon';

interface NavbarProps {
    onToggle: () => void;
    onForcedIconToggle: boolean;
}

const Navbar = ({ onToggle, onForcedIconToggle }: NavbarProps) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        onToggle();
        setIsToggled(!isToggled);
    };

    useEffect(() => {
        onForcedIconToggle ? setIsToggled(false) : setIsToggled(true);
    }, [onForcedIconToggle]);

    return (
        <div className="flex items-center justify-between lg:justify-end border-b p-4 h-14">
            <a
                className="bg-sc-gray hover:bg-sc-purple-normal transition-all rounded-lg border hover:border-gray-400 p-2"
                href="https://sitechoob.ir"
                target="_blank">
                <SiteChoobIcon className='w-20 h-5' />
            </a>

            <button
                onClick={handleToggle}
                className="flex lg:hidden items-center justify-center text-gray-300 hover:text-gray-400 transition-all w-10">
                {!isToggled ? <Burger /> : <CloseIcon size={15} />}
            </button>
        </div>
    );
};

export default Navbar;
