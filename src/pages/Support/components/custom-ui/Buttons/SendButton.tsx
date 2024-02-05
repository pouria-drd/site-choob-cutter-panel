import SendIcon from "../../Icons/SendIcon";

interface SendButtonProps {
    onClick?: () => void;
}

const SendButton = ({ onClick }: SendButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-white p-4 gap-2 w-24 h-10
            hover:bg-sc-blue-normal hover:text-white transition-all
            flex items-center justify-center
            rounded-3xl text-sc-blue-normal"
        >
            <span>
                <SendIcon />
            </span>

            <span className="text-sm sm:text-base">
                ارسال
            </span>
        </button>
    );
};

export default SendButton;
