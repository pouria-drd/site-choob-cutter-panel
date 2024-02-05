interface MessageBoxProps {
    isMe: boolean;

    time: string;
    message: string;
}

const MessageBox = ({ isMe, time, message }: MessageBoxProps) => {
    return (
        <div className={`flex items-center font-peyda justify-center
                        ${isMe ? "sm:justify-end" : "sm:justify-start"} 
                        w-full`}>

            <div className={`${isMe ? "bg-sc-green-400" : "bg-sc-purple-500"}
                            flex flex-col rounded-md min-w-60 px-4 py-2`}>
                {isMe ? (
                    <h4 className="text-sc-green-800 text-right">شما</h4>
                ) : (
                    <h4 className="text-sc-blue-normal text-right">پشتیبان</h4>
                )}

                <p className="text-right r2l">
                    {message}
                </p>

                <p className="text-sc-gray-500 text-xs">
                    {time}
                </p>
            </div>
        </div>
    );
};

export default MessageBox;
