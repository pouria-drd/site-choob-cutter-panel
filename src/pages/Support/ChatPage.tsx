import { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "./components/custom-ui/Header";
import MoreIcon from "./components/Icons/MoreIcon";
import Button from "../../components/custom-ui/Button/Button";
import BaseCard from "../../components/custom-ui/Cards/BaseCard";
import NewSupportModal from "./components/Modals/NewSupportModal";
import SendButton from "./components/custom-ui/Buttons/SendButton";
import PlusButton from "./components/custom-ui/Buttons/PlusButton";
import MessageBox from "./components/custom-ui/MessageBox";

interface UrlParams {
    chatID: string;
}


const ChatPage = () => {
    const params = useParams<{ chatID: string; }>();
    const { chatID } = Object.assign({}, params) as UrlParams;

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <BaseCard>
                <Header
                    title="پشتیبانی"
                    description="پشتیبانی 24 ساعته سایت چوب؛ کافیست دکمه ((ارسال درخواست)) را بزنید"
                    fontSize="text-3xl"
                >
                    <Button onClick={handleOpen}>
                        ارسال درخواست
                    </Button>
                </Header>


                <div className="bg-white flex flex-col 
                items-center justify-between w-full h-full gap-4 pb-4">

                    <div className="flex flex-col justify-evenly w-full h-full gap-2">
                        <div className="flex items-center justify-between 
                    border-b border-b-sc-gray-200 w-full p-4">
                            <button>
                                <MoreIcon />
                            </button>

                            <h3 className="text-sc-black text-lg font-semibold">
                                عنوان
                            </h3>
                        </div>



                        <div className="flex flex-col overflow-auto w-full max-h-[45vh] xl:max-h-[50vh] px-4 gap-4">
                            <MessageBox isMe={true} message="سلام و درود" time="11:20" />
                            <MessageBox isMe={false} message="سلام و درود" time="11:20" />
                            <MessageBox isMe={true} message="سلام و درود" time="11:20" />
                            <MessageBox isMe={false} message="سلام و درود" time="11:20" />
                            <MessageBox isMe={true} message="سلام و درود" time="11:20" />
                            <MessageBox isMe={false} message="سلام و درود" time="11:20" />
                        </div>
                    </div>


                    <div className="w-full">
                        <div className="bg-sc-purple-normal flex items-center justify-between
                        rounded-[30px] w-[98%] mx-auto px-4 py-1 gap-2 sm:gap-4">
                            <SendButton />

                            <input type="text" className="base-input w-full h-10 r2l" />

                            <PlusButton />
                        </div>
                    </div>
                </div>
            </BaseCard>

            <NewSupportModal isOpen={isOpen} onClose={handleClose} />
        </>
    )
}

export default ChatPage