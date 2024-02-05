import FilterIcon from "../icons/FilterIcon";

interface FilterButtonProps {
    onClick?: () => void;
}

const FilterButton = ({ onClick }: FilterButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center justify-center
                hover:bg-sc-gray-normal hover:text-white hover:border-sc-gray-normal
                transition-all text-sc-gray-500 
                rounded-md border border-sc-gray-500
                px-4 py-2 min-w-20 gap-2">
            <span>
                فیلتر
            </span>

            <span>
                <FilterIcon />
            </span>
        </button>
    );
};

export default FilterButton;
