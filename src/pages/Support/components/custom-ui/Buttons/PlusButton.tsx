import PlusIcon from "../../Icons/PlusIcon";

interface PlusButtonProps {
    onClick?: () => void;
}

const PlusButton = ({ onClick }: PlusButtonProps) => {
    return (
        <button onClick={onClick} className="bg-white rounded-full text-sc-gray-500 
        hover:bg-sc-blue-normal hover:text-white transition-all
        p-3">
            <PlusIcon />
        </button>
    );
};

export default PlusButton;
